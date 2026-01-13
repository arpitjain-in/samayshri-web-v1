# Pre-Launch Checklist

Use this checklist to ensure everything is ready before deploying to production.

## 🔧 Development Setup

- [ ] Node.js 18+ installed
- [ ] Dependencies installed (`npm install`)
- [ ] `.env.local` created with Firebase credentials
- [ ] Development server runs successfully (`npm run dev`)
- [ ] All pages load without errors
- [ ] No console errors in browser

## 📝 Content

### Company Information
- [ ] Company contact details updated in `src/data/company.js`
- [ ] Phone number updated
- [ ] Email address updated
- [ ] Physical address verified
- [ ] Google Maps embed URL updated with correct coordinates

### Products
- [ ] Product list reviewed in `src/data/products.js`
- [ ] Product descriptions are accurate
- [ ] Packaging sizes are correct
- [ ] Product features are up-to-date

### Team
- [ ] Team members list is complete in `src/data/team.js`
- [ ] All names and titles are correct
- [ ] Responsibilities are accurate
- [ ] Hierarchy is properly structured

### Process
- [ ] Production process steps verified in `src/data/process.js`
- [ ] Step descriptions are accurate
- [ ] Process flow makes sense

## 🎨 Assets

- [ ] Company logo added to `public/logo.svg`
- [ ] Logo displays correctly in header
- [ ] Favicon works (uses logo.svg)
- [ ] Open Graph image added to `public/og-image.jpg` (1200x630px)
- [ ] Product images added to `public/products/`
  - [ ] atta-5kg-bag.jpg
  - [ ] atta-5kg-pouch.jpg
  - [ ] besan-500g.jpg
  - [ ] besan-1kg.jpg
  - [ ] daliya-500g.jpg
- [ ] Team photos added to `public/team/`
  - [ ] bc-jain.jpg
  - [ ] rj-jain.jpg
  - [ ] harsh-jain.jpg
  - [ ] sarthak-jain.jpg
  - [ ] ankit-jain.jpg
  - [ ] arpit-jain.jpg
  - [ ] atul-jain.jpg
  - [ ] siddharth-jain.jpg
- [ ] All images optimized for web (compressed)

## 🔥 Firebase Setup

- [ ] Firebase project created
- [ ] Web app registered in Firebase Console
- [ ] Firebase credentials added to `.env.local`
- [ ] Firestore database enabled
- [ ] Firebase CLI installed (`npm install -g firebase-tools`)
- [ ] Logged into Firebase (`firebase login`)
- [ ] Project initialized (`firebase init`)
- [ ] `.firebaserc` updated with correct project ID

### Firestore
- [ ] Firestore database created
- [ ] Security rules deployed (`firebase deploy --only firestore:rules`)
- [ ] Test form submission works
- [ ] Can view submissions in Firebase Console

### Hosting
- [ ] Hosting enabled in Firebase project
- [ ] Build folder set to `dist` in firebase.json
- [ ] Test deployment successful

## 🧪 Testing

### Functionality
- [ ] All navigation links work
- [ ] Mobile menu opens and closes
- [ ] Contact form validation works
- [ ] Contact form submits successfully
- [ ] Success toast appears after form submission
- [ ] Form data appears in Firestore
- [ ] All external links work
- [ ] Social media links point to correct profiles

### Responsive Design
- [ ] Test on mobile phone (iOS/Android)
- [ ] Test on tablet
- [ ] Test on desktop (1920px+)
- [ ] Test on laptop (1366px)
- [ ] Navigation works on all screen sizes
- [ ] Forms are usable on mobile
- [ ] Images don't overflow
- [ ] Text is readable on all devices

### Performance
- [ ] Build completes without errors (`npm run build`)
- [ ] Preview build works (`npm run preview`)
- [ ] No console errors in production build
- [ ] Page load time is acceptable
- [ ] Images load properly
- [ ] Animations are smooth

### Browsers
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Tested in Edge
- [ ] Tested in mobile browsers

### Accessibility
- [ ] Tab navigation works
- [ ] Focus indicators visible
- [ ] Form labels are clear
- [ ] Error messages are helpful
- [ ] Color contrast is sufficient

## 🔍 SEO & Meta

- [ ] Page title is correct in `index.html`
- [ ] Meta description is compelling
- [ ] Keywords are relevant
- [ ] Open Graph title is set
- [ ] Open Graph description is set
- [ ] Open Graph image is set
- [ ] Twitter Card tags are present
- [ ] JSON-LD structured data is valid

## 🔐 Security

- [ ] No sensitive data in client-side code
- [ ] Firebase API key is properly configured
- [ ] Firestore rules are restrictive
- [ ] Environment variables are not committed to Git
- [ ] `.env.local` is in `.gitignore`

## 📱 Social Media

- [ ] Facebook page URL correct
- [ ] Instagram profile URL correct
- [ ] LinkedIn company page URL correct
- [ ] Twitter/X profile URL correct
- [ ] All social links open in new tab

## 🚀 Deployment

- [ ] Production build created (`npm run build`)
- [ ] Build reviewed in `dist/` folder
- [ ] Deployed to Firebase (`firebase deploy`)
- [ ] Deployment successful
- [ ] Live site loads correctly
- [ ] All pages work on live site
- [ ] Forms work on live site
- [ ] Analytics tracking (if enabled) works

## 🌐 Domain & DNS

- [ ] Custom domain purchased (if applicable)
- [ ] Domain added in Firebase Hosting
- [ ] DNS records configured
- [ ] SSL certificate provisioned
- [ ] HTTPS works
- [ ] www redirect works (if configured)

## 📊 Analytics (Optional)

- [ ] Google Analytics enabled
- [ ] Measurement ID added to environment variables
- [ ] Analytics tracking verified
- [ ] Goals/events configured

## 📧 Email (Optional)

- [ ] Email service configured for form notifications
- [ ] Test emails received
- [ ] Email templates look good

## 🎯 Post-Launch

- [ ] Monitor Firestore for form submissions
- [ ] Check Firebase Hosting analytics
- [ ] Monitor for errors
- [ ] Gather user feedback
- [ ] Plan next iterations

## 📚 Documentation

- [ ] README.md reviewed
- [ ] DEPLOYMENT.md reviewed
- [ ] Team trained on content updates
- [ ] Admin access documented
- [ ] Contact information for support documented

## ✅ Final Checks

- [ ] All placeholders replaced with real content
- [ ] All TODO comments removed from code
- [ ] All test/demo content removed
- [ ] Site reviewed by stakeholders
- [ ] Final approval received
- [ ] Launch announcement ready

---

## 🎉 Ready to Launch!

Once all items are checked, you're ready to go live!

**Final Command:**
```bash
npm run build && firebase deploy
```

**Share your website:**
- URL: https://your-domain.com
- Announce on social media
- Update business cards and materials
- Notify customers and partners

---

**Good luck with your launch! 🚀**
