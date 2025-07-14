import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  // Debug: Log the config values
  console.log('Firebase Config Debug:', {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    projectId: config.public.firebaseProjectId,
    storageBucket: config.public.firebaseStorageBucket,
    messagingSenderId: config.public.firebaseMessagingSenderId,
    appId: config.public.firebaseAppId,
    measurementId: config.public.firebaseMeasurementId,
  })

  // Check if environment variables are loaded
  const hasEnvVars =
    config.public.firebaseApiKey && config.public.firebaseAuthDomain

  console.log('Environment variables loaded:', hasEnvVars)

  // Use environment variables with fallback to hardcoded values
  const firebaseConfig = {
    apiKey:
      config.public.firebaseApiKey || 'AIzaSyAsZny07ZSziKUbauE8z4kSjBuNPZIqLKc',
    authDomain:
      config.public.firebaseAuthDomain || 'nuxt-dashdash.firebaseapp.com',
    projectId: config.public.firebaseProjectId || 'nuxt-dashdash',
    storageBucket:
      config.public.firebaseStorageBucket ||
      'nuxt-dashdash.firebasestorage.app',
    messagingSenderId:
      config.public.firebaseMessagingSenderId || '285552934341',
    appId:
      config.public.firebaseAppId ||
      '1:285552934341:web:19ee5473fe483602929fac',
    measurementId: config.public.firebaseMeasurementId || 'G-8V4CC0302V',
  }

  console.log('Final Firebase Config:', firebaseConfig)

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider()

  // Configure Google provider with CORS-friendly settings
  googleProvider.setCustomParameters({
    prompt: 'select_account',
    // Add CORS-friendly parameters
    access_type: 'offline',
    include_granted_scopes: 'true',
  })

  // Enhanced sign-in function with CORS handling
  const signInWithGoogle = async () => {
    try {
      console.log('Starting Google sign-in...')
      const result = await signInWithPopup(auth, googleProvider)
      console.log('Sign-in successful:', result)
      return result
    } catch (error) {
      console.error('Sign-in error:', error)

      // Handle specific CORS errors
      if (error.code === 'auth/popup-closed-by-user') {
        throw new Error('Sign-in was cancelled by user')
      } else if (error.code === 'auth/popup-blocked') {
        throw new Error('Popup was blocked. Please allow popups for this site.')
      } else if (error.code === 'auth/unauthorized-domain') {
        throw new Error(
          'This domain is not authorized. Please check Firebase console settings.'
        )
      } else {
        throw error
      }
    }
  }

  console.log('Firebase plugin initialized successfully')

  return {
    provide: {
      firebase: {
        auth,
        googleProvider,
        signInWithGoogle,
        signOut: () => signOut(auth),
        onAuthStateChanged: callback => onAuthStateChanged(auth, callback),
      },
    },
  }
})
