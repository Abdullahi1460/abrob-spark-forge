from collections import deque
from pathlib import Path
from PIL import Image


def remove_outer_white(image: Image.Image) -> Image.Image:
    """Make only edge-connected white pixels transparent; preserve white logo details."""
    rgba = image.convert('RGBA')
    pixels = rgba.load()
    width, height = rgba.size
    seen = set()
    queue = deque()

    def is_background(x, y):
        r, g, b, a = pixels[x, y]
        return a > 0 and r >= 245 and g >= 245 and b >= 245

    for x in range(width):
        for y in (0, height - 1):
            if is_background(x, y):
                queue.append((x, y))
    for y in range(height):
        for x in (0, width - 1):
            if is_background(x, y):
                queue.append((x, y))

    while queue:
        x, y = queue.popleft()
        if (x, y) in seen or not is_background(x, y):
            continue
        seen.add((x, y))
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in seen:
                queue.append((nx, ny))

    for x, y in seen:
        r, g, b, _ = pixels[x, y]
        pixels[x, y] = (r, g, b, 0)
    return rgba



root = Path('/home/ubuntu/abrob-spark-forge')
src = Image.open(root / 'public/logo.png').convert('RGBA')
# Crop the standalone ABROB mark above the wordmark, removing the large white margins.
mark = src.crop((285, 225, 965, 885))
# Keep a small, even white margin so the mark remains crisp in browser tabs.
side = max(mark.size)
canvas = Image.new('RGBA', (side, side), (255, 255, 255, 0))
left = (side - mark.width) // 2
upper = (side - mark.height) // 2
canvas.alpha_composite(remove_outer_white(mark), (left, upper))

out = root / 'public/Favicon'
out.mkdir(parents=True, exist_ok=True)
for size, name in [(16, 'favicon-16x16.png'), (32, 'favicon-32x32.png'), (180, 'apple-touch-icon.png'), (192, 'android-chrome-192x192.png'), (512, 'android-chrome-512x512.png')]:
    canvas.resize((size, size), Image.Resampling.LANCZOS).save(out / name, optimize=True)

ico = canvas.resize((256, 256), Image.Resampling.LANCZOS)
ico.save(out / 'favicon.ico', sizes=[(16,16), (32,32), (48,48)], format='ICO')
# Keep the root fallback favicon in sync with the enlarged artwork.
(root / 'public/favicon.ico').write_bytes((out / 'favicon.ico').read_bytes())
print('Generated enlarged favicon variants from', src.size, 'using crop', mark.size)
