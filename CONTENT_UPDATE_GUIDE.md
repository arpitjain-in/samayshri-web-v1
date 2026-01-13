# Content Update Guide

This guide shows you how to update content on the Samayshri Agro website **without touching any code**.

All content is stored in easy-to-edit JavaScript files in the `src/data/` folder.

---

## 📝 Updating Company Information

**File:** `src/data/company.js`

### Change Contact Details

Find this section:
```javascript
contact: {
  phone: '+91 XXXXX XXXXX',
  email: 'info@samayshriagro.com',
  whatsapp: '+91 XXXXX XXXXX',
},
```

**Edit the values:**
```javascript
contact: {
  phone: '+91 7544 123456',          // ← Update phone
  email: 'contact@samayshriagro.com', // ← Update email
  whatsapp: '+91 7544 123456',        // ← Update WhatsApp
},
```

### Update Address

Find:
```javascript
address: {
  street: 'Daulat Baug, AB Road, Bharsula Chauraha, Raghogarh',
  district: 'Guna',
  // ...
```

Edit as needed, keeping the structure the same.

### Update Google Maps

Find:
```javascript
mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18...'
```

**To get your map embed URL:**
1. Go to Google Maps
2. Search for your location
3. Click "Share"
4. Click "Embed a map"
5. Copy the URL from the `src="..."` part
6. Replace the value

### Update Social Media Links

Find:
```javascript
social: {
  facebook: 'https://facebook.com/samayshriagro',
  instagram: 'https://instagram.com/samayshriagro',
  linkedin: 'https://linkedin.com/company/samayshriagro',
  twitter: 'https://twitter.com/samayshriagro',
},
```

Replace with your actual social media URLs.

---

## 🌾 Updating Products

**File:** `src/data/products.js`

### Add a New Product

Copy an existing product and modify:

```javascript
{
  id: 6,  // ← Increment the ID
  name: 'Premium Sooji',  // ← Product name
  category: 'Sooji',  // ← Category
  size: '500 g',  // ← Package size
  packaging: 'Pouch',  // ← Packaging type
  description: 'Fine quality semolina for delicious halwa and upma.',  // ← Description
  image: '/products/sooji-500g.jpg',  // ← Image path
  features: [  // ← List of features
    'Premium quality',
    'Fine texture',
    'Rich taste',
    'Hygienically packed'
  ],
}
```

**Don't forget the comma** after each product!

### Remove a Product

Simply delete the entire product object, including the surrounding `{ }`.

### Update Product Details

Find the product and change any value:
```javascript
{
  id: 1,
  name: 'Premium Chakki Atta',  // ← Change this
  size: '10 kg',  // ← or this
  // ...
}
```

---

## 👥 Updating Team Members

**File:** `src/data/team.js`

### Add a New Team Member

Add a new object to the array:

```javascript
{
  id: 9,  // ← New ID
  name: 'Rahul Jain',  // ← Name
  title: 'Head — Quality Control',  // ← Title
  level: 'head',  // ← Level: 'founder', 'executive', or 'head'
  responsibilities: 'Quality assurance, testing, certifications',  // ← Responsibilities
  image: '/team/rahul-jain.jpg',  // ← Photo path
}
```

### Update Team Member

Find the member and edit:
```javascript
{
  id: 6,
  name: 'Arpit Jain',
  title: 'Head — Technology & Digital Marketing',  // ← Updated title
  responsibilities: 'IT, digital marketing, CRM, e-commerce',  // ← Updated
  // ...
}
```

### Team Levels

- **founder** - Displayed prominently at top
- **executive** - COO, CFO level (3-column grid)
- **head** - Department heads (4-column grid)

---

## ⚙️ Updating Production Process

**File:** `src/data/process.js`

### Change Step Description

Find the step and edit:

```javascript
{
  id: 1,
  title: 'Cleaning',
  shortDesc: 'Remove dust, stones and impurities',  // ← Short version
  fullDesc: 'Advanced cleaning process...',  // ← Full version (shows when expanded)
  // ...
}
```

### Change Step Icon

Icons come from Lucide React. Available icons include:
- `Wind`, `Droplets`, `Cog`, `Filter`, `Trash2`, `Package`
- `Wheat`, `Zap`, `Shield`, `Settings`, `Sparkles`, etc.

Browse all icons at: https://lucide.dev/icons

Change the icon in the import at the top:
```javascript
import { Droplets, Wind, Cog, Filter, Trash2, Package } from 'lucide-react';
```

Then use it in the step:
```javascript
icon: Wind,  // ← Use imported icon name
```

### Change Step Color

Colors are Tailwind gradients:
```javascript
color: 'from-blue-500 to-blue-600',
```

Options:
- `from-blue-500 to-blue-600` (blue)
- `from-green-500 to-green-600` (green)
- `from-purple-500 to-purple-600` (purple)
- `from-red-500 to-red-600` (red)
- `from-amber-500 to-amber-600` (orange/yellow)
- `from-emerald-500 to-emerald-600` (emerald green)
- `from-cyan-500 to-cyan-600` (cyan)
- `from-pink-500 to-pink-600` (pink)

---

## 🎨 Adding Images

### Product Images

1. **Prepare your images:**
   - Format: JPG or PNG
   - Size: 800x800px recommended
   - Optimize (compress) before uploading

2. **Add to folder:**
   - Place in `public/products/`
   - Name them clearly: `atta-5kg-bag.jpg`

3. **Update product data:**
   ```javascript
   image: '/products/atta-5kg-bag.jpg',
   ```

### Team Photos

1. **Prepare photos:**
   - Format: JPG
   - Size: 400x400px minimum (square)
   - Professional headshots work best

2. **Add to folder:**
   - Place in `public/team/`
   - Name: `firstname-lastname.jpg`

3. **Update team data:**
   ```javascript
   image: '/team/arpit-jain.jpg',
   ```

### Company Logo

1. **Prepare logo:**
   - Format: SVG (preferred) or PNG
   - Transparent background
   - Square aspect ratio

2. **Replace file:**
   - Replace `public/logo.svg` with your logo

---

## 🔄 After Making Changes

### See Changes Locally

1. **Save the file** (Cmd+S / Ctrl+S)
2. The dev server will auto-reload
3. Check your browser - changes appear instantly!

### Deploy Changes to Production

```bash
# 1. Build the project
npm run build

# 2. Deploy to Firebase
firebase deploy --only hosting
```

Your changes are now live! 🎉

---

## ⚠️ Common Mistakes to Avoid

### 1. Missing Comma

**Wrong:**
```javascript
{
  id: 1,
  name: 'Product 1'
  description: 'Test'  // ← Missing comma above
}
```

**Right:**
```javascript
{
  id: 1,
  name: 'Product 1',  // ← Comma here
  description: 'Test'
}
```

### 2. Duplicate IDs

Each item needs a unique ID:
```javascript
// Wrong - both have id: 1
{ id: 1, name: 'Product 1' },
{ id: 1, name: 'Product 2' },  // ← Should be id: 2

// Right
{ id: 1, name: 'Product 1' },
{ id: 2, name: 'Product 2' },
```

### 3. Breaking the Structure

Keep the structure intact:
```javascript
// Don't remove these brackets or braces
export const products = [  // ← Keep this
  {  // ← Keep this for each item
    // Your data
  },  // ← Keep this
];  // ← Keep this
```

### 4. Image Path

Paths start with `/`:
```javascript
// Wrong
image: 'products/image.jpg'

// Right
image: '/products/image.jpg'  // ← Starts with /
```

---

## 🆘 Getting Help

If something breaks after editing:

1. **Undo your changes** (Cmd+Z / Ctrl+Z)
2. **Check for error message** in the terminal or browser console
3. **Common issues:**
   - Missing comma
   - Unclosed quote `"` or `'`
   - Unclosed bracket `[` or brace `{`
4. **Ask for help** - provide the error message

---

## 💡 Pro Tips

### Use VS Code

1. Install VS Code (free)
2. Open the project folder
3. It will highlight errors for you!
4. Auto-formats code
5. Shows syntax issues

### Backup Before Editing

Before making changes:
```bash
# Copy the file
cp src/data/products.js src/data/products.backup.js
```

If something breaks, restore:
```bash
# Restore from backup
cp src/data/products.backup.js src/data/products.js
```

### Test Locally First

Always test on your local dev server before deploying!

```bash
npm run dev
```

Check everything works, then deploy.

---

**You're ready to update content!** 🚀

Remember: You're just editing text and values. Don't change the structure, and you'll be fine!
