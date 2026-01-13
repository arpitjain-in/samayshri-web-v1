# Deployment Guide

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure Firebase**
   - Copy `.env.example` to `.env.local`
   - Add your Firebase credentials

3. **Run locally**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

## Firebase Setup Steps

### 1. Create Firebase Project

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project
firebase init
```

When prompted, select:
- ✅ Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
- ✅ Firestore: Deploy rules and create indexes for Firestore

### 2. Configuration

**For Hosting:**
- Public directory: `dist`
- Configure as single-page app: `Yes`
- Set up automatic builds and deploys with GitHub: `No` (or Yes if you want CI/CD)

**For Firestore:**
- Use existing rules file: `firestore.rules`
- Use existing indexes file: `firestore.indexes.json`

### 3. Get Firebase Config

1. Go to Firebase Console → Project Settings
2. Scroll to "Your apps" section
3. Click on your web app or create one
4. Copy the config object
5. Add values to `.env.local`:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 4. Deploy

```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy

# Or deploy only hosting
firebase deploy --only hosting

# Or deploy only firestore rules
firebase deploy --only firestore:rules
```

## GitHub Actions CI/CD (Optional)

To enable automatic deployments on push to main:

1. **Get Firebase Token**
   ```bash
   firebase login:ci
   ```
   Copy the token that's generated.

2. **Add GitHub Secrets**
   
   Go to your GitHub repository → Settings → Secrets and variables → Actions
   
   Add these secrets:
   - `FIREBASE_TOKEN` - Token from step 1
   - `VITE_FIREBASE_API_KEY` - Your Firebase API key
   - `VITE_FIREBASE_AUTH_DOMAIN` - Your auth domain
   - `VITE_FIREBASE_PROJECT_ID` - Your project ID
   - `VITE_FIREBASE_STORAGE_BUCKET` - Your storage bucket
   - `VITE_FIREBASE_MESSAGING_SENDER_ID` - Your sender ID
   - `VITE_FIREBASE_APP_ID` - Your app ID
   - `VITE_FIREBASE_MEASUREMENT_ID` - Your measurement ID (optional)

3. **Push to main branch**
   ```bash
   git add .
   git commit -m "Deploy to production"
   git push origin main
   ```

The GitHub Action will automatically build and deploy your site!

## Custom Domain Setup

1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Enter your domain name
4. Follow DNS setup instructions
5. Wait for SSL certificate provisioning (can take up to 24 hours)

## Environment-Specific Builds

### Development
```bash
npm run dev
```

### Production Preview
```bash
npm run build
npm run preview
```

### Staging (if needed)
Create `.env.staging` and build with:
```bash
npm run build -- --mode staging
```

## Monitoring & Analytics

- **Firebase Console**: View hosting metrics
- **Google Analytics**: Track user behavior (if enabled)
- **Firestore**: Monitor form submissions in the `visits` collection

## Troubleshooting

### Build fails
- Clear cache: `rm -rf node_modules/.vite`
- Reinstall: `rm -rf node_modules package-lock.json && npm install`

### Deploy fails
- Check you're logged in: `firebase login --reauth`
- Verify project: `firebase projects:list`
- Check .firebaserc file exists

### Forms not submitting
- Verify Firestore is enabled in Firebase Console
- Check firestore.rules are deployed: `firebase deploy --only firestore:rules`
- Verify environment variables are set correctly

## Support

For deployment issues, contact your development team or refer to:
- [Firebase Documentation](https://firebase.google.com/docs/hosting)
- [Vite Documentation](https://vitejs.dev/guide/)
