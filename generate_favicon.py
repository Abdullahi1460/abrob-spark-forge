from PIL import Image, ImageDraw
import os

source_logo = r"public\logo.png"
favicon_dir = r"public\Favicon"

if os.path.exists(source_logo):
    print(f"Source logo found: {source_logo}")
    os.makedirs(favicon_dir, exist_ok=True)
    img = Image.open(source_logo)
    print(f"Original size: {img.size}, Mode: {img.mode}")
    
    # Convert to RGBA
    img = img.convert("RGBA")
    
    # Flood fill from the four corners to remove the off-white background
    w, h = img.size
    ImageDraw.floodfill(img, (0, 0), (0, 0, 0, 0), thresh=30)
    ImageDraw.floodfill(img, (w - 1, 0), (0, 0, 0, 0), thresh=30)
    ImageDraw.floodfill(img, (0, h - 1), (0, 0, 0, 0), thresh=30)
    ImageDraw.floodfill(img, (w - 1, h - 1), (0, 0, 0, 0), thresh=30)
    
    # Crop to the bounding box of the actual logo content (removes extra empty margins)
    bbox = img.getbbox()
    if bbox:
        cropped = img.crop(bbox)
        cw, ch = cropped.size
        
        # Make the cropped image a square centered on the logo
        max_dim = max(cw, ch)
        square_img = Image.new("RGBA", (max_dim, max_dim), (0, 0, 0, 0))
        x_offset = (max_dim - cw) // 2
        y_offset = (max_dim - ch) // 2
        square_img.paste(cropped, (x_offset, y_offset))
        
        # Add 0% safety padding to maximize the favicon size in browser tabs
        padding = 0
        padded_size = max_dim + 2 * padding
        img = Image.new("RGBA", (padded_size, padded_size), (0, 0, 0, 0))
        img.paste(square_img, (padding, padding))
    
    # Create different sizes with high-quality resampling
    sizes = {
        "favicon-32x32.png": (32, 32),
        "favicon-16x16.png": (16, 16),
        "apple-touch-icon.png": (180, 180)
    }
    
    for filename, size in sizes.items():
        resized = img.resize(size, Image.Resampling.LANCZOS)
        filepath = os.path.join(favicon_dir, filename)
        resized.save(filepath)
        actual_size = resized.size
        print(f"[OK] Created {filename} - Size: {actual_size[0]}x{actual_size[1]}")
    
    # Create ICO file
    ico_sizes = [(16, 16), (32, 32), (48, 48)]
    favicon_ico_path = os.path.join(favicon_dir, "favicon.ico")
    img.save(favicon_ico_path, format="ICO", sizes=ico_sizes)
    print(f"[OK] Created favicon.ico with multiple resolutions")
    
    print("\n[SUCCESS] All favicon files created successfully!")
    
else:
    print(f"[ERROR] Source logo not found: {source_logo}")
