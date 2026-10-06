[CmdletBinding(SupportsShouldProcess)]
param(
  [string[]]$Path = @("public/assets", "src/assets"),
  [ValidateRange(320, 4096)]
  [int]$MaxDimension = 1600,
  [ValidateRange(40, 95)]
  [int]$JpegQuality = 78
)

# Re-encodes JPG/JPEG files and resizes oversized PNGs without requiring a
# third-party image binary. It only replaces a file when the result is smaller.
Add-Type -AssemblyName System.Drawing

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq "image/jpeg" }

function Get-ScaledSize {
  param(
    [int]$Width,
    [int]$Height,
    [int]$Maximum
  )

  if ($Width -le $Maximum -and $Height -le $Maximum) {
    return @{ Width = $Width; Height = $Height }
  }

  $scale = [Math]::Min($Maximum / $Width, $Maximum / $Height)
  return @{
    Width = [Math]::Max(1, [int][Math]::Round($Width * $scale))
    Height = [Math]::Max(1, [int][Math]::Round($Height * $scale))
  }
}

$files = foreach ($candidate in $Path) {
  if (Test-Path -LiteralPath $candidate) {
    Get-ChildItem -LiteralPath $candidate -File -Recurse |
      Where-Object { $_.Extension -match '^(?i)\.(jpg|jpeg|png)$' }
  }
}

$beforeBytes = 0L
$afterBytes = 0L
$optimizedFiles = 0

foreach ($file in $files) {
  $originalBytes = $file.Length
  $beforeBytes += $originalBytes
  $extension = $file.Extension.ToLowerInvariant()
  $source = $null
  $bitmap = $null
  $graphics = $null
  $encoderParameters = $null
  $temporaryPath = "$($file.FullName).optimizing$extension"

  try {
    $source = [System.Drawing.Image]::FromFile($file.FullName)
    $size = Get-ScaledSize -Width $source.Width -Height $source.Height -Maximum $MaxDimension
    $pixelFormat = if ($extension -eq '.png') {
      [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
    } else {
      [System.Drawing.Imaging.PixelFormat]::Format24bppRgb
    }

    $bitmap = [System.Drawing.Bitmap]::new($size.Width, $size.Height, $pixelFormat)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality

    if ($extension -ne '.png') {
      $graphics.Clear([System.Drawing.Color]::White)
    }

    $graphics.DrawImage($source, 0, 0, $size.Width, $size.Height)

    if ($extension -eq '.png') {
      $bitmap.Save($temporaryPath, [System.Drawing.Imaging.ImageFormat]::Png)
    } else {
      $encoderParameters = [System.Drawing.Imaging.EncoderParameters]::new(1)
      $encoderParameters.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new(
        [System.Drawing.Imaging.Encoder]::Quality,
        [long]$JpegQuality
      )
      $bitmap.Save($temporaryPath, $jpegCodec, $encoderParameters)
    }
  } catch {
    Write-Warning "Skipped $($file.FullName): $($_.Exception.Message)"
    continue
  } finally {
    if ($encoderParameters) { $encoderParameters.Dispose() }
    if ($graphics) { $graphics.Dispose() }
    if ($bitmap) { $bitmap.Dispose() }
    if ($source) { $source.Dispose() }
  }

  $optimizedBytes = (Get-Item -LiteralPath $temporaryPath).Length
  if ($optimizedBytes -lt $originalBytes) {
    if ($PSCmdlet.ShouldProcess($file.FullName, "replace with an optimized image")) {
      Move-Item -LiteralPath $temporaryPath -Destination $file.FullName -Force
      $optimizedFiles++
      $afterBytes += $optimizedBytes
      Write-Output ("Optimized {0}: {1:N0} KB -> {2:N0} KB" -f $file.Name, ($originalBytes / 1KB), ($optimizedBytes / 1KB))
    } else {
      Remove-Item -LiteralPath $temporaryPath -Force -WhatIf:$false
      $afterBytes += $originalBytes
    }
  } else {
    Remove-Item -LiteralPath $temporaryPath -Force -WhatIf:$false
    $afterBytes += $originalBytes
  }
}

$savedBytes = $beforeBytes - $afterBytes
Write-Output ("Optimized {0} image(s). Saved {1:N1} MB ({2:P0})." -f $optimizedFiles, ($savedBytes / 1MB), ($savedBytes / [Math]::Max(1, $beforeBytes)))
