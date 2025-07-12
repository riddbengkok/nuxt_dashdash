# Firebase Authentication Setup

This project uses Firebase Authentication for Google Sign-In, which works perfectly with static hosting like GitHub Pages.

## Setup Instructions

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or select an existing project
3. Follow the setup wizard

### 2. Enable Google Authentication

1. In your Firebase project, go to **Authentication** > **Sign-in method**
2. Click on **Google** and enable it
3. Add your authorized domain (your GitHub Pages domain)

### 3. Get Firebase Configuration

1. Go to **Project Settings** (gear icon) > **General**
2. Scroll down to **Your apps** section
3. Click **Add app** and select **Web** (</>)
4. Register your app and copy the config values

### 4. Set Environment Variables

The project now uses environment variables for secure configuration. You have two options:

#### Option A: Use the provided .env.local file
The project comes with a `.env.local` file containing your Firebase configuration. This file is already set up with your values and is ignored by Git for security.

#### Option B: Create your own environment file
If you want to use different Firebase credentials, create a `.env.local` file with:

```env
NUXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NUXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NUXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 5. Install Firebase

```bash
npm install firebase
```

### 6. Configure Authorized Domains

For GitHub Pages deployment, add these domains to Firebase:
- `your-username.github.io`
- `localhost` (for development)

Go to **Authentication** > **Settings** > **Authorized domains** and add your domains.

## Security Benefits

✅ **Environment Variables**: Firebase config is now stored in `.env.local` (not committed to Git)
✅ **Secure by Default**: Sensitive data is kept out of version control
✅ **Easy Configuration**: Just update `.env.local` for different environments
✅ **Production Ready**: Works with CI/CD and deployment platforms

## Deployment

This setup works perfectly with GitHub Pages because:

1. **No Server Required**: Firebase handles all authentication server-side
2. **No Database Required**: User sessions are managed by Firebase
3. **Static Hosting Compatible**: All authentication happens client-side
4. **Secure**: Firebase handles security and token management
5. **Environment Variables**: Secure configuration management

## Features

- ✅ Google Sign-In
- ✅ Automatic session persistence
- ✅ Secure token management
- ✅ Works with static hosting
- ✅ No backend required
- ✅ Real-time auth state updates
- ✅ Environment variable configuration

## Security Notes

- Firebase handles all security aspects
- Tokens are automatically managed
- No sensitive data stored locally
- HTTPS required for production (GitHub Pages provides this)
- Environment variables keep config secure
- `.env.local` is ignored by Git

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `NUXT_PUBLIC_FIREBASE_API_KEY` | Firebase API Key | `AIzaSy...` |
| `NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Auth Domain | `project.firebaseapp.com` |
| `NUXT_PUBLIC_FIREBASE_PROJECT_ID` | Project ID | `my-project` |
| `NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Storage Bucket | `project.appspot.com` |
| `NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Sender ID | `123456789` |
| `NUXT_PUBLIC_FIREBASE_APP_ID` | App ID | `1:123456789:web:abc123` |
| `NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID` | Analytics ID | `G-XXXXXXXXXX` | 