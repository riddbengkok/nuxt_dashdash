// Only keep the interfaces/types that are actually used in the code
interface FirebaseUser {
  uid: string
  email: string | null
  displayName: string | null
  photoURL: string | null
  emailVerified: boolean
  getIdToken: () => Promise<string>
  getIdTokenResult: () => Promise<{
    token: string
    expirationTime: string
    issuedAtTime: string
  }>
}

interface TokenResult {
  token: string
  expirationTime: string
  issuedAtTime: string
}

export const useAuth = () => {
  const user = ref<FirebaseUser | null>(null)
  const loading = ref<boolean>(true)
  const error = ref<string | null>(null)
  const tokenExpiry = ref<Date | null>(null)
  const isTokenExpired = ref<boolean>(false)

  const { $firebase } = useNuxtApp()
  const config = useRuntimeConfig()

  // Get token settings from environment variables with defaults
  const tokenCheckInterval = config.public.tokenCheckInterval || 5 * 60 * 1000 // 5 minutes default
  const tokenExpiryWarning = config.public.tokenExpiryWarning || 10 * 60 * 1000 // 10 minutes warning
  const tokenExpiryThreshold =
    config.public.tokenExpiryThreshold || 5 * 60 * 1000 // 5 minutes threshold

  console.log('Token Settings:', {
    checkInterval: `${tokenCheckInterval / 1000 / 60} minutes`,
    warningTime: `${tokenExpiryWarning / 1000 / 60} minutes`,
    expiryThreshold: `${tokenExpiryThreshold / 1000 / 60} minutes`,
  })

  // Function to check token expiration
  const checkTokenExpiration = async (): Promise<TokenResult | null> => {
    if ($firebase && $firebase.auth.currentUser) {
      try {
        const token = await $firebase.auth.currentUser.getIdTokenResult()
        const expiryTime = new Date(token.expirationTime)
        const now = new Date()
        const timeUntilExpiry = expiryTime.getTime() - now.getTime()

        tokenExpiry.value = expiryTime
        isTokenExpired.value = timeUntilExpiry <= tokenExpiryThreshold

        console.log('Token Info:', {
          tokenId: `${token.token.slice(0, 20)}...`,
          issuedAt: new Date(token.issuedAtTime).toLocaleString(),
          expiresAt: expiryTime.toLocaleString(),
          isExpired: isTokenExpired.value,
          timeUntilExpiry: `${Math.floor(timeUntilExpiry / 1000 / 60)} minutes`,
          warningThreshold: `${Math.floor(tokenExpiryWarning / 1000 / 60)} minutes`,
          expiryThreshold: `${Math.floor(tokenExpiryThreshold / 1000 / 60)} minutes`,
        })

        // Show warning if token is expiring soon
        if (
          timeUntilExpiry <= tokenExpiryWarning &&
          timeUntilExpiry > tokenExpiryThreshold
        ) {
          console.warn(
            `Token will expire in ${Math.floor(
              timeUntilExpiry / 1000 / 60
            )} minutes`
          )
        }

        // If token is expired, trigger refresh
        if (isTokenExpired.value) {
          console.warn('Token is expired, attempting refresh...')
          await refreshToken()
        }

        return token
      } catch (err) {
        console.error('Error checking token:', err)
        return null
      }
    }
    return null
  }

  // Function to refresh token
  const refreshToken = async (): Promise<string | null> => {
    if ($firebase && $firebase.auth.currentUser) {
      try {
        console.log('Refreshing token...')
        const newToken = await $firebase.auth.currentUser.getIdToken(true)
        console.log('Token refreshed successfully')

        // Update token expiry
        await checkTokenExpiration()

        return newToken
      } catch (err) {
        console.error('Error refreshing token:', err)
        // If refresh fails, user might need to re-authenticate
        await signOut()
        throw err
      }
    }
    return null
  }

  // Watch for auth state changes
  onMounted(() => {
    console.log('useAuth: Starting auth state monitoring')

    if ($firebase) {
      console.log('useAuth: Firebase plugin found')

      // Set up auth state listener
      const unsubscribe = $firebase.onAuthStateChanged(
        async (
          authUser:
            | FirebaseUser
            | {
                uid: string
                email: string | null
                displayName: string | null
                photoURL: string | null
                emailVerified: boolean
                getIdToken: () => Promise<string>
                getIdTokenResult: () => Promise<{
                  token: string
                  expirationTime: string
                  issuedAtTime: string
                }>
              }
            | null
        ) => {
          console.log('useAuth: Auth state changed:', authUser)

          if (authUser) {
            console.log('useAuth: User signed in:', {
              uid: authUser.uid,
              email: authUser.email,
              displayName: authUser.displayName,
            })
            user.value = authUser

            // Check token expiration when user signs in
            await checkTokenExpiration()

            // Set up periodic token checks using environment variable
            const tokenCheckIntervalId = setInterval(async () => {
              if (user.value) {
                await checkTokenExpiration()
              } else {
                clearInterval(tokenCheckIntervalId)
              }
            }, tokenCheckInterval)
          } else {
            console.log('useAuth: User signed out')
            user.value = null
            tokenExpiry.value = null
            isTokenExpired.value = false
          }

          loading.value = false
        }
      )

      // Clean up listener on unmount
      onUnmounted(() => {
        console.log('useAuth: Cleaning up auth listener')
        unsubscribe()
      })
    } else {
      console.error('useAuth: Firebase plugin not found')
      loading.value = false
      error.value = 'Firebase not initialized'
    }

    // Set a timeout to prevent infinite loading
    setTimeout(() => {
      if (loading.value) {
        console.warn('useAuth: Loading timeout - forcing loading to false')
        loading.value = false
        error.value = 'Authentication timeout - please refresh the page'
      }
    }, 10000) // 10 second timeout
  })

  // Sign in with Google
  const signInWithGoogle = async (): Promise<unknown> => {
    try {
      loading.value = true
      error.value = null

      if (!$firebase) {
        throw new Error('Firebase not initialized')
      }

      console.log('useAuth: Starting Google sign-in...')
      if (typeof $firebase.signInWithGoogle !== 'function') {
        throw new Error(
          'signInWithGoogle method not found on Firebase instance'
        )
      }
      const result = await ($firebase as any).signInWithGoogle()
      console.log('useAuth: Sign-in successful:', result)

      // Check token after successful sign-in
      await checkTokenExpiration()

      // Don't set user.value here - let the auth state listener handle it
      return result
    } catch (err: unknown) {
      console.error('useAuth: Sign-in error:', err)
      error.value = err instanceof Error ? err.message : 'Unknown error'
      throw err
    } finally {
      loading.value = false
    }
  }

  // Sign out
  const signOut = async (): Promise<void> => {
    try {
      if (!$firebase) {
        throw new Error('Firebase not initialized')
      }

      console.log('useAuth: Starting sign out...')
      await $firebase.signOut()
      console.log('useAuth: Sign out successful')

      // Clear token info
      tokenExpiry.value = null
      isTokenExpired.value = false

      // Don't set user.value to null here - let the auth state listener handle it
    } catch (err: unknown) {
      console.error('useAuth: Sign out error:', err)
      error.value = err instanceof Error ? err.message : 'Unknown error'
      throw err
    }
  }

  return {
    user: readonly(user),
    loading: readonly(loading),
    error: readonly(error),
    tokenExpiry: readonly(tokenExpiry),
    isTokenExpired: readonly(isTokenExpired),
    signInWithGoogle,
    signOut,
    checkTokenExpiration,
    refreshToken,
  }
}
