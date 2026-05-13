import os
from PIL import Image

def crop_products():
    img_path = 'rustik plant.jpg'
    out_dir = 'rustik-plank/public/images'
    
    if not os.path.exists(out_dir):
        os.makedirs(out_dir)
        
    img = Image.open(img_path)
    
    # Coordinates (left, upper, right, lower)
    # Let's crop roughly 200x200 squares from the centers of the columns
    cols = [
        (250, 550), # col 1
        (650, 950), # col 2
        (1050, 1350) # col 3
    ]
    
    # Rows
    rows = [
        (1000, 1200),
        (1240, 1440),
        (1480, 1680),
        (1720, 1920)
    ]
    
    for c_idx, col in enumerate(cols):
        for r_idx, row in enumerate(rows):
            left, right = col
            upper, lower = row
            crop_img = img.crop((left, upper, right, lower))
            out_path = os.path.join(out_dir, f'product_{c_idx}_{r_idx}.jpg')
            crop_img.save(out_path)
            print(f"Saved {out_path}")

if __name__ == '__main__':
    crop_products()
