from pathlib import Path
from PIL import Image

root = Path('/home/ubuntu/abrob-spark-forge')
src = Image.open(root / 'public/logo.png').convert('RGBA')
# Crop the standalone ABROB mark above the wordmark, removing the large white margins.
mark = src.crop((285, 225, 965, 885))
# Keep a small, even white margin so the mark remains crisp in browser tabs.
side = max(mark.size)
canvas = Image.new('RGBA', (side, side), (255, 255, 255, 255))
left = (side - mark.width) // 2
upper = (side - mark.height) // 2
canvas.alpha_composite(mark, (left, upper))

out = root / 'public/Favicon'
out.mkdir(parents=True, exist_ok=True)
for size, name in [(16, 'favicon-16x16.png'), (32, 'favicon-32x32.png'), (180, 'apple-touch-icon.png'), (192, 'android-chrome-192x192.png'), (512, 'android-chrome-512x512.png')]:
    canvas.resize((size, size), Image.Resampling.LANCZOS).convert('RGB').save(out / name, optimize=True)

ico = canvas.resize((256, 256), Image.Resampling.LANCZOS).convert('RGB')
ico.save(out / 'favicon.ico', sizes=[(16,16), (32,32), (48,48)], format='ICO')
# Keep the root fallback favicon in sync with the enlarged artwork.
(root / 'public/favicon.ico').write_bytes((out / 'favicon.ico').read_bytes())
print('Generated enlarged favicon variants from', src.size, 'using crop', mark.size)
