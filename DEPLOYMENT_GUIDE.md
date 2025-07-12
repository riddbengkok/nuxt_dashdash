# Deployment Guide

This guide explains how to deploy your Nuxt 3 Firebase authentication app to GitHub Pages with secure environment variables.

## Local Development

### 1. Environment Variables
The project uses `.env.local` for local development. This file is already configured with your Firebase credentials and is ignored by Git.

### 2. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to test your application.

## GitHub Pages Deployment

### 1. Set Up GitHub Secrets

For secure deployment, you need to add your Firebase configuration as GitHub Secrets:

1. Go to your GitHub repository
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add each of these:

| Secret Name | Value |
|-------------|-------|
| `FIREBASE_API_KEY` | `AIzaSyAsZny07ZSziKUbauE8z4kSjBuNPZIqLKc` |
| `FIREBASE_AUTH_DOMAIN` | `nuxt-dashdash.firebaseapp.com` |
| `FIREBASE_PROJECT_ID` | `nuxt-dashdash` |
| `FIREBASE_STORAGE_BUCKET` | `nuxt-dashdash.firebasestorage.app` |
| `FIREBASE_MESSAGING_SENDER_ID` | `285552934341` |
| `FIREBASE_APP_ID` | `1:285552934341:web:19ee5473fe483602929fac` |
| `FIREBASE_MEASUREMENT_ID` | `G-8V4CC0302V` |

### 2. Enable GitHub Pages

1. Go to your repository **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Select **gh-pages** branch and **/(root)** folder
4. Click **Save**

### 3. Automatic Deployment

The GitHub Actions workflow will automatically:
- Build your application
- Create `.env.local` with secrets
- Deploy to GitHub Pages

### 4. Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the project
npm run generate

# Deploy to GitHub Pages
npx gh-pages -d dist
```

## Firebase Console Configuration

### 1. Add Authorized Domains

In Firebase Console → Authentication → Settings → Authorized domains, add:

- `localhost` (for development)
- `your-username.github.io` (for production)

### 2. Enable Google Authentication

1. Firebase Console → Authentication → Sign-in method
2. Enable **Google** provider
3. Configure OAuth consent screen if needed

## Security Best Practices

✅ **Environment Variables**: Sensitive data stored in secrets
✅ **Git Ignore**: `.env.local` is not committed to Git
✅ **HTTPS Only**: GitHub Pages provides HTTPS
✅ **Firebase Security**: All auth handled by Firebase
✅ **No Backend**: No server-side code required

## Troubleshooting

### Common Issues

1. **Build Fails**: Check that all GitHub Secrets are set
2. **Authentication Not Working**: Verify authorized domains in Firebase
3. **Environment Variables Not Loading**: Ensure `.env.local` exists locally

### Debug Steps

1. Check GitHub Actions logs for build errors
2. Verify Firebase configuration in browser console
3. Test authentication flow locally first
4. Check Firebase Console for auth events

## Environment Variables Reference

| Variable | Purpose | Required |
|----------|---------|----------|
| `FIREBASE_API_KEY` | Firebase API access | ✅ |
| `FIREBASE_AUTH_DOMAIN` | Authentication domain | ✅ |
| `FIREBASE_PROJECT_ID` | Firebase project ID | ✅ |
| `FIREBASE_STORAGE_BUCKET` | Storage bucket | ✅ |
| `FIREBASE_MESSAGING_SENDER_ID` | Messaging sender | ✅ |
| `FIREBASE_APP_ID` | Firebase app ID | ✅ |
| `FIREBASE_MEASUREMENT_ID` | Analytics ID | ❌ |

## Next Steps

After deployment:

1. Test the authentication flow on your live site
2. Monitor Firebase Console for auth events
3. Set up custom domain if needed
4. Add additional authentication providers
5. Implement user role management 