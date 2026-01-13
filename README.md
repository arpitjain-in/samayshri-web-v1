# Samayshri Agro and Foods Industries - Website

Official website for Samayshri Agro and Foods Industries, the first fully automated, IoT-enabled flour mill in Guna district, Madhya Pradesh.

## 🌟 Features

- **Modern React Application** - Built with Vite for blazing-fast development and optimized production builds
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Framer Motion for delightful user experience
- **Firebase Integration** - Firestore for storing visit requests
- **SEO Optimized** - Meta tags, Open Graph, and structured data (JSON-LD)
- **Code Splitting** - Lazy-loaded routes for optimal performance
- **Form Validation** - React Hook Form with Zod schema validation

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Backend**: Firebase (Hosting + Firestore)
- **Notifications**: React Hot Toast

## 📁 Project Structure

```
samayshri-agro-web/
├── public/               # Static assets
│   ├── logo.svg         # Company logo
│   ├── og-image.jpg     # Open Graph image
│   └── ...
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── SectionTitle.jsx
│   │   ├── AnimatedCounter.jsx
│   │   └── ...
│   ├── data/           # Mock data and content
│   │   ├── company.js
│   │   ├── products.js
│   │   ├── team.js
│   │   └── process.js
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Process.jsx
│   │   ├── Products.jsx
│   │   ├── Team.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   ├── firebase.js     # Firebase configuration
│   └── index.css       # Global styles
├── .env.example        # Environment variables template
├── firebase.json       # Firebase configuration
├── firestore.rules     # Firestore security rules
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Firebase account (for deployment)

### Installation

1. **Clone the repository**
   ```bash
   cd Samayshri-web-v1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your Firebase credentials in `.env.local`:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🔥 Firebase Setup

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" and follow the setup wizard
3. Enable Google Analytics (optional)

### 2. Register Your Web App

1. In your Firebase project, click the web icon (`</>`) to add a web app
2. Register the app with a nickname (e.g., "Samayshri Web")
3. Copy the Firebase configuration object
4. Paste the values into your `.env.local` file

### 3. Enable Firestore Database

1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Start in **production mode**
4. Choose a Cloud Firestore location (closest to your users)

### 4. Install Firebase CLI

```bash
npm install -g firebase-tools
```

### 5. Login to Firebase

```bash
firebase login
```

### 6. Initialize Firebase in Your Project

```bash
firebase init
```

Select:
- **Hosting**: Configure files for Firebase Hosting
- **Firestore**: Deploy rules and indexes

Configuration:
- **Build directory**: `dist`
- **Single-page app**: Yes
- **Automatic builds with GitHub**: Optional

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build Locally

```bash
npm run preview
```

### Deploy to Firebase Hosting

```bash
firebase deploy --only hosting
```

Or deploy everything (hosting + firestore rules):

```bash
firebase deploy
```

### One-Command Deploy

```bash
npm run build && firebase deploy --only hosting
```

## 🔐 Firestore Security

The `firestore.rules` file contains security rules for the database:

- **Visits Collection**: Allows public write access for form submissions, no public read access
- All other collections are blocked by default
- Consider adding Firebase Authentication for admin access to view submissions

## 📊 Viewing Form Submissions

Form submissions are stored in Firestore under the `visits` collection. To view them:

1. Go to Firebase Console → Firestore Database
2. Navigate to the `visits` collection
3. Each document contains:
   - `name` - Visitor name
   - `email` - Email address
   - `phone` - Phone number
   - `visitDate` - Preferred visit date
   - `numberOfVisitors` - Number of people
   - `message` - Optional message
   - `status` - Request status (pending/confirmed/completed)
   - `createdAt` - Timestamp

## 🎨 Customization

### Update Company Logo

Replace `/public/logo.svg` with your company logo. Recommended formats:
- SVG (scalable)
- PNG (with transparency)
- Minimum 512x512px for best quality

### Update Contact Information

Edit `src/data/company.js` to update:
- Contact details (phone, email)
- Address
- Social media links
- Google Maps embed URL

### Add Product Images

Place product images in `/public/products/` and update paths in `src/data/products.js`

### Add Team Photos

Place team photos in `/public/team/` and update paths in `src/data/team.js`

## 🚀 CI/CD with GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches:
      - main

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        env:
          VITE_FIREBASE_API_KEY: ${{ secrets.VITE_FIREBASE_API_KEY }}
          VITE_FIREBASE_AUTH_DOMAIN: ${{ secrets.VITE_FIREBASE_AUTH_DOMAIN }}
          VITE_FIREBASE_PROJECT_ID: ${{ secrets.VITE_FIREBASE_PROJECT_ID }}
          VITE_FIREBASE_STORAGE_BUCKET: ${{ secrets.VITE_FIREBASE_STORAGE_BUCKET }}
          VITE_FIREBASE_MESSAGING_SENDER_ID: ${{ secrets.VITE_FIREBASE_MESSAGING_SENDER_ID }}
          VITE_FIREBASE_APP_ID: ${{ secrets.VITE_FIREBASE_APP_ID }}
          
      - name: Deploy to Firebase
        uses: w9jds/firebase-action@master
        with:
          args: deploy --only hosting
        env:
          FIREBASE_TOKEN: ${{ secrets.FIREBASE_TOKEN }}
```

Add your Firebase token as a GitHub secret:
```bash
firebase login:ci
```

## 🧪 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Content Management

All content is managed through JavaScript files in `src/data/`:

- **company.js** - Company information, stats, contact details
- **products.js** - Product catalog with features and descriptions
- **team.js** - Team members with roles and responsibilities
- **process.js** - Production process steps

Simply edit these files to update content without touching component code.

## 🎯 Performance Optimization

- **Code Splitting** - Routes are lazy-loaded
- **Image Optimization** - Use modern formats (WebP, AVIF)
- **Caching** - Firebase Hosting provides CDN caching
- **Tree Shaking** - Vite removes unused code
- **Minification** - Production builds are minified

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Clear Vite cache: `rm -rf node_modules/.vite`

### Firebase Deployment Issues

- Ensure you're logged in: `firebase login`
- Check project ID: `firebase projects:list`
- Verify build folder exists: `ls dist/`

### Environment Variables Not Working

- Vite requires `VITE_` prefix for environment variables
- Restart dev server after changing `.env.local`
- Don't commit `.env.local` to version control

## 📞 Support

For issues or questions:
- Email: info@samayshriagro.com
- Phone: +91 XXXXX XXXXX

## 📄 License

© 2024 Samayshri Agro and Foods Industries. All rights reserved.

---

**Built with ❤️ for Samayshri Agro and Foods Industries**
