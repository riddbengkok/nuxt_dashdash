# Firebase Authentication Troubleshooting

## Common Issues and Solutions

### 1. "Firebase: Error (auth/invalid-api-key)"

This error usually means one of the following:

#### Check Firebase Project Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project "nuxt-dashdash"
3. Verify the project exists and is active

#### Check API Key
1. Go to Project Settings (gear icon) → General
2. Scroll down to "Your apps" section
3. Verify the API key matches: `AIzaSyAsZny07ZSziKUbauE8z4kSjBuNPZIqLKc`

#### Check Authorized Domains
1. Go to Authentication → Settings → Authorized domains
2. Add these domains:
   - `localhost` (for development)
   - `your-username.github.io` (for production)

#### Check Authentication Setup
1. Go to Authentication → Sign-in method
2. Enable Google provider
3. Configure OAuth consent screen if needed

### 2. Environment Variables Not Loading

#### Check .env.local File
```bash
cat .env.local
```

Should contain:
```env
NUXT_PUBLIC_FIREBASE_API_KEY=AIzaSyAsZny07ZSziKUbauE8z4kSjBuNPZIqLKc
NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN=nuxt-dashdash.firebaseapp.com
NUXT_PUBLIC_FIREBASE_PROJECT_ID=nuxt-dashdash
NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET=nuxt-dashdash.firebasestorage.app
NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=285552934341
NUXT_PUBLIC_FIREBASE_APP_ID=1:285552934341:web:19ee5473fe483602929fac
NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-8V4CC0302V
```

#### Restart Development Server
```bash
npm run dev
```

### 3. Test Firebase Connection

Visit `http://localhost:3000/test-firebase` to:
- Check if Firebase is initialized
- Verify configuration values
- Test connection to Firebase

### 4. Browser Console Debugging

Open browser console (F12) and check for:
- Firebase initialization errors
- Network errors
- CORS issues

### 5. Common Solutions

#### Solution 1: Clear Browser Cache
1. Open browser developer tools
2. Right-click refresh button
3. Select "Empty Cache and Hard Reload"

#### Solution 2: Check Network Tab
1. Open browser developer tools
2. Go to Network tab
3. Try to sign in
4. Look for failed requests to Firebase

#### Solution 3: Verify Firebase Project
1. Go to Firebase Console
2. Check if project is on the correct plan (Spark/Blaze)
3. Verify billing is set up if needed

### 6. Development vs Production

#### Local Development
- Use `localhost` in authorized domains
- Check browser console for errors
- Verify `.env.local` file exists

#### Production Deployment
- Add your domain to authorized domains
- Set up GitHub Secrets for environment variables
- Check GitHub Actions logs for build errors

### 7. Firebase Project Verification

Run this in browser console to check Firebase config:
```javascript
// Check if Firebase is loaded
console.log('Firebase:', typeof firebase)

// Check auth instance
const { $firebase } = useNuxtApp()
console.log('Firebase Auth:', $firebase?.auth)

// Check current user
console.log('Current User:', $firebase?.auth?.currentUser)
```

### 8. Alternative Testing

If the issue persists, try:
1. Creating a new Firebase project
2. Using a different API key
3. Testing with a simple HTML file first

### 9. Contact Support

If none of the above works:
1. Check Firebase status: https://status.firebase.google.com/
2. Review Firebase documentation
3. Check Nuxt.js compatibility
4. Consider using Firebase Hosting for testing 