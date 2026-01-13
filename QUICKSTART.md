# Quick Start Guide - Samayshri Agro Website

## ⚡ Get Running in 5 Minutes

### Step 1: Install Dependencies (1 min)
```bash
npm install
```

### Step 2: Set Up Firebase Config (2 min)

1. Copy the environment template:
   ```bash
   cp .env.example .env.local
   ```

2. **Option A - Use Mock Mode (Skip Firebase for now)**
   
   Open `.env.local` and add placeholder values:
   ```env
   VITE_FIREBASE_API_KEY=demo
   VITE_FIREBASE_AUTH_DOMAIN=demo.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=demo
   VITE_FIREBASE_STORAGE_BUCKET=demo.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=123456
   VITE_FIREBASE_APP_ID=1:123456:web:abc123
   ```
   
   **Note**: Form submissions won't work until you set up real Firebase credentials.

   **Option B - Use Real Firebase** (recommended for production)
   
   See [DEPLOYMENT.md](./DEPLOYMENT.md) for full Firebase setup instructions.

### Step 3: Start Development Server (30 sec)
```bash
npm run dev
```

Open http://localhost:5173 in your browser! 🎉

---

## 📝 Customize Content

All content is in easy-to-edit JavaScript files:

### Update Company Info
Edit `src/data/company.js`:
- Address
- Phone & Email
- Social media links
- Google Maps embed URL

### Update Products
Edit `src/data/products.js`:
- Add/remove products
- Update descriptions
- Change packaging sizes

### Update Team Members
Edit `src/data/team.js`:
- Add/remove team members
- Update roles and responsibilities

### Update Process Steps
Edit `src/data/process.js`:
- Modify production process descriptions

---

## 🎨 Add Your Assets

### Logo
Replace `public/logo.svg` with your logo

### Product Images
Add images to `public/products/`:
- `atta-5kg-bag.jpg`
- `atta-5kg-pouch.jpg`
- `besan-500g.jpg`
- `besan-1kg.jpg`
- `daliya-500g.jpg`

### Team Photos
Add images to `public/team/`:
- `bc-jain.jpg`
- `rj-jain.jpg`
- etc.

### Open Graph Image
Add `public/og-image.jpg` (1200x630px recommended)

---

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Firebase
```bash
firebase deploy
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

---

## 🆘 Need Help?

- **Full Documentation**: See [README.md](./README.md)
- **Deployment Guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Issues**: Contact your development team

---

## ✅ Checklist Before Going Live

- [ ] Added real Firebase credentials to `.env.local`
- [ ] Updated company contact information in `src/data/company.js`
- [ ] Added company logo to `public/logo.svg`
- [ ] Added product images to `public/products/`
- [ ] Added team photos to `public/team/`
- [ ] Updated Google Maps embed URL in `src/data/company.js`
- [ ] Tested contact form submission
- [ ] Built project with `npm run build`
- [ ] Previewed production build with `npm run preview`
- [ ] Deployed to Firebase with `firebase deploy`
- [ ] Set up custom domain (optional)
- [ ] Enabled Google Analytics (optional)

**Ready to launch!** 🚀
