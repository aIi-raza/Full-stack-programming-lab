import os
from PIL import Image

def crop_all():
    img_path = 'rustik plant.jpg'
    out_dir = 'rustik-plank/public/images'
    
    if not os.path.exists(out_dir):
        os.makedirs(out_dir)
        
    img = Image.open(img_path)
    
    # Hero image
    img.crop((150, 100, 900, 650)).save(os.path.join(out_dir, 'hero_chair.png'))
    
    # Collections
    img.crop((230, 750, 600, 950)).save(os.path.join(out_dir, 'collection_chairs.png'))
    img.crop((610, 750, 980, 950)).save(os.path.join(out_dir, 'collection_beds.png'))
    img.crop((990, 750, 1360, 950)).save(os.path.join(out_dir, 'collection_tables.png'))
    
    # Hot Deals
    img.crop((230, 2000, 785, 2350)).save(os.path.join(out_dir, 'hotdeal_left.png'))
    img.crop((800, 2000, 1360, 2350)).save(os.path.join(out_dir, 'hotdeal_right.png'))
    
    # Latest Updates
    img.crop((230, 2550, 585, 2750)).save(os.path.join(out_dir, 'blog_1.png'))
    img.crop((600, 2550, 955, 2750)).save(os.path.join(out_dir, 'blog_2.png'))
    img.crop((970, 2550, 1325, 2750)).save(os.path.join(out_dir, 'blog_3.png'))
    
    print("Done cropping all additional images.")

if __name__ == '__main__':
    crop_all()
