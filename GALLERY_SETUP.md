# Adding Your Plant Images to the Gallery

## Quick Steps

### 1. Save Your Plant Images

Save your 4 plant photos to the `public/gallery/` folder with these names:
- `plant-1.jpg` - First image (machinery with yellow hoppers)
- `plant-2.jpg` - Second image (silos and dust collection)
- `plant-3.jpg` - Third image (grinding units)
- `plant-4.jpg` - Fourth image (complete production line view)

**You can do this by:**
1. Right-click on each image attachment
2. Save to: `/Users/avikajain/workspace/Samayshri-web-v1/public/gallery/`
3. Rename them to `plant-1.jpg`, `plant-2.jpg`, etc.

### 2. That's It!

The gallery is already configured and will automatically display your images once you save them to the folder.

---

## Gallery Features

✅ **Full-screen lightbox** - Click any image to view in detail
✅ **Category filters** - Filter images by production area
✅ **Navigation** - Previous/Next buttons in lightbox
✅ **Responsive** - Looks great on all devices
✅ **Hover effects** - Smooth animations on hover
✅ **Image info** - Category and description overlays

---

## Customizing Gallery Content

If you want to add more images or change descriptions, edit:
`src/pages/Gallery.jsx`

Find the `galleryImages` array and add/modify entries:

```javascript
{
  id: 5,  // New image
  src: '/gallery/plant-5.jpg',
  alt: 'Description for accessibility',
  category: 'Production Floor',  // or 'Storage & Processing', 'Grinding Section'
  description: 'Brief description shown on hover'
}
```

---

## Adding More Categories

You can create new categories like:
- "Packaging Area"
- "Quality Control"
- "Warehouse"
- "Campus Exterior"

Just add them to the `category` field in your image objects.

---

## Accessing the Gallery

Once images are added, visit:
- **In development**: http://localhost:5173/gallery
- **After deployment**: https://your-domain.com/gallery

The Gallery link is already added to:
- Main navigation menu
- Footer navigation

---

## Image Optimization Tips

For best performance:
1. **Resize** images to max 1920px width
2. **Compress** using tools like TinyPNG or ImageOptim
3. **Format**: JPG for photos (80-90% quality)
4. **File size**: Keep under 500KB per image

---

Ready to view your gallery! 🎉
