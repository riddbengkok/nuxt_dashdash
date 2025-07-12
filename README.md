# Nuxt 3 Dashboard with Firebase Authentication

A modern Nuxt 3 dashboard with Google authentication using Firebase, designed for static hosting on GitHub Pages.

## Features

- 🔐 **Google Authentication** - Secure login with Firebase Auth
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Modern UI** - Built with Tailwind CSS and DaisyUI
- 🚀 **Static Deployment** - Perfect for GitHub Pages
- 🔒 **No Backend Required** - Firebase handles everything
- ⚡ **Fast & Lightweight** - Optimized for performance

## Tech Stack

- **Framework**: Nuxt 3
- **Styling**: Tailwind CSS + DaisyUI
- **Authentication**: Firebase Auth
- **Icons**: Heroicons + FontAwesome
- **Fonts**: Google Fonts (Muli)
- **Deployment**: GitHub Pages

## Quick Start

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd oska-nuxt-dashboard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up Firebase (if not already done)
Follow the instructions in [FIREBASE_SETUP.md](./FIREBASE_SETUP.md)

### 4. Run development server
```bash
npm run dev
```

### 5. Build for production
```bash
npm run generate
```

### 6. Deploy to GitHub Pages
```bash
./deploy.sh
```

## Project Structure

```
├── pages/
│   ├── login.vue          # Login page with Google auth
│   └── dashboard.vue      # Dashboard after login
├── plugins/
│   └── firebase.client.js # Firebase configuration
├── composables/
│   └── useAuth.js         # Authentication composable
├── assets/
│   └── css/              # Global styles
└── nuxt.config.ts        # Nuxt configuration
```

## Authentication Flow

1. **Login Page** (`/login`)
   - User clicks "Continue with Google"
   - Firebase handles OAuth flow
   - User is redirected to dashboard

2. **Dashboard** (`/dashboard`)
   - Shows user profile information
   - Displays user photo, name, and email
   - Sign out functionality

3. **Session Management**
   - Firebase automatically handles session persistence
   - Users stay logged in across browser sessions
   - Secure token management

## Environment Variables

The Firebase configuration is currently hardcoded in `plugins/firebase.client.js`. For production, you should:

1. Create a `.env` file with:
```env
NUXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NUXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NUXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

2. Update `plugins/firebase.client.js` to use `useRuntimeConfig()`

## Deployment

### GitHub Pages

1. Push your code to GitHub
2. Run the deployment script:
```bash
./deploy.sh
```

3. Configure GitHub Pages to use the `gh-pages` branch

### Other Static Hosts

The project works with any static hosting service:
- Netlify
- Vercel
- Firebase Hosting
- AWS S3 + CloudFront

## Security Features

- ✅ HTTPS required (GitHub Pages provides this)
- ✅ Firebase handles all security
- ✅ No sensitive data stored locally
- ✅ Automatic token refresh
- ✅ Secure session management

## Customization

### Styling
- Modify `tailwind.config.js` for theme changes
- Update DaisyUI components in pages
- Add custom CSS in `assets/css/`

### Authentication
- Add more providers in `plugins/firebase.client.js`
- Customize auth flow in `composables/useAuth.js`
- Add role-based access control

### Pages
- Add new pages in `pages/` directory
- Create layouts in `layouts/`
- Add middleware for route protection

## Troubleshooting

### Common Issues

1. **Firebase not initialized**
   - Check Firebase configuration in `plugins/firebase.client.js`
   - Ensure all environment variables are set

2. **Authentication not working**
   - Verify authorized domains in Firebase Console
   - Check browser console for errors

3. **Build errors**
   - Run `npm run build` to check for issues
   - Ensure all dependencies are installed

### Development Tips

- Use `npm run dev` for development
- Check browser console for Firebase errors
- Use Vue DevTools for debugging
- Monitor Firebase Console for auth events

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for your own applications.

## Support

If you need help:
1. Check the [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) guide
2. Review Firebase documentation
3. Check Nuxt 3 documentation
4. Open an issue on GitHub
