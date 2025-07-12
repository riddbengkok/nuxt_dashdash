# CORS Fix Guide for Firebase Authentication

## Understanding CORS Issues

CORS (Cross-Origin Resource Sharing) errors occur when your browser blocks requests to Firebase services. This is common with Firebase authentication.

## Quick Fixes

### 1. Browser Settings

#### Allow Popups
1. Click the popup blocker icon in your browser
2. Select "Always allow popups from this site"
3. Refresh the page

#### Allow Cookies
1. Go to browser settings → Privacy & Security
2. Allow cookies for localhost
3. Clear browser cache and reload

### 2. Firebase Console Configuration

#### Add Authorized Domains
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project "nuxt-dashdash"
3. Go to **Authentication** → **Settings** → **Authorized domains**
4. Add these domains:
   - `localhost`
   - `127.0.0.1`
   - `your-username.github.io` (for production)

#### Enable Google Authentication
1. Go to **Authentication** → **Sign-in method**
2. Click on **Google**
3. Enable it and configure OAuth consent screen

### 3. Development Environment

#### Use HTTPS for Local Development
```bash
# Install mkcert for local HTTPS
brew install mkcert
mkcert -install
mkcert localhost

# Start Nuxt with HTTPS
npm run dev -- --https
```

#### Alternative: Use HTTP for Local Development
Firebase allows HTTP for localhost during development. Make sure:
- You're using `localhost` (not `127.0.0.1`)
- Port is 3000 or 3001
- No other security restrictions

### 4. Code Fixes

#### Updated Firebase Configuration
The Firebase plugin now includes:
- Better error handling for CORS issues
- Popup blocking detection
- Domain authorization checks

#### Browser Compatibility
- Chrome/Edge: Works best
- Firefox: May need additional settings
- Safari: May require HTTPS

## Testing Steps

### 1. Test Connection
Visit `http://localhost:3000/test-firebase` to check:
- Firebase initialization
- Configuration values
- Connection status

### 2. Check Browser Console
Open F12 and look for:
- CORS errors
- Popup blocking messages
- Firebase initialization errors

### 3. Test Authentication Flow
1. Click "Continue with Google"
2. Check if popup opens
3. Complete Google sign-in
4. Verify redirect to dashboard

## Common Error Messages

### "Popup was blocked"
**Solution:**
- Allow popups for localhost
- Check browser popup blocker settings
- Try in incognito/private mode

### "Unauthorized domain"
**Solution:**
- Add domain to Firebase authorized domains
- Check Firebase project configuration
- Verify API key is correct

### "CORS policy blocked"
**Solution:**
- Use HTTPS for production
- Add proper CORS headers
- Check domain authorization

## Production Deployment

### GitHub Pages
1. Set up GitHub Secrets with Firebase config
2. Deploy using the provided workflow
3. Add your domain to Firebase authorized domains

### Other Hosting
1. Ensure HTTPS is enabled
2. Add domain to Firebase authorized domains
3. Configure environment variables

## Advanced Solutions

### 1. Custom Domain
If using a custom domain:
1. Add domain to Firebase authorized domains
2. Configure DNS properly
3. Enable HTTPS

### 2. Multiple Environments
Create different Firebase projects for:
- Development (localhost)
- Staging (staging.yourdomain.com)
- Production (yourdomain.com)

### 3. Debug Mode
Enable Firebase debug mode:
```javascript
// Add to your Firebase config
firebase.initializeApp(config)
firebase.auth().useDeviceLanguage()
```

## Browser-Specific Fixes

### Chrome
1. Go to Settings → Privacy and security
2. Site Settings → Pop-ups and redirects
3. Add localhost to allowed sites

### Firefox
1. Go to Settings → Privacy & Security
2. Permissions → Block pop-up windows
3. Add localhost to exceptions

### Safari
1. Safari → Preferences → Websites
2. Pop-up Windows → Allow for localhost

## Verification Checklist

- [ ] Firebase project exists and is active
- [ ] Google authentication is enabled
- [ ] Domain is in authorized domains list
- [ ] Browser allows popups for localhost
- [ ] No CORS errors in browser console
- [ ] HTTPS is used for production
- [ ] Environment variables are set correctly

## Still Having Issues?

1. **Check Firebase Status**: https://status.firebase.google.com/
2. **Review Firebase Docs**: https://firebase.google.com/docs/auth
3. **Test with Simple HTML**: Create a minimal test page
4. **Try Different Browser**: Test in Chrome, Firefox, Safari
5. **Check Network Tab**: Look for failed requests in browser dev tools

## Support

If issues persist:
1. Check the troubleshooting guide
2. Review Firebase console logs
3. Test with Firebase hosting
4. Contact Firebase support 