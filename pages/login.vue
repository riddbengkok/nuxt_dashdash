<template>
  <div
    class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4"
  >
    <div class="max-w-md w-full space-y-8">
      <!-- Header -->
      <div class="text-center">
        <div
          class="mx-auto h-12 w-12 bg-indigo-600 rounded-full flex items-center justify-center"
        >
          <ShieldCheckIcon class="h-8 w-8 text-white" />
        </div>
        <h2 class="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
          Welcome back
        </h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Sign in to your account to continue
        </p>
      </div>

      <!-- Login Form -->
      <div class="card bg-white dark:bg-gray-800 shadow-xl">
        <div class="card-body">
          <!-- Loading State -->
          <div v-if="loading && !loadingTimeout" class="text-center py-8">
            <div class="loading loading-spinner loading-lg"></div>
            <p class="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
          </div>

          <!-- Loading Timeout -->
          <div v-if="loadingTimeout" class="text-center py-8">
            <div class="alert alert-warning">
              <ExclamationTriangleIcon class="h-5 w-5" />
              <div>
                <span class="font-medium">Loading Timeout</span>
                <div class="text-sm mt-1">
                  Firebase is taking too long to initialize. Please refresh the
                  page.
                </div>
              </div>
            </div>
            <button @click="reloadPage" class="btn btn-primary mt-4">
              Refresh Page
            </button>
          </div>

          <!-- Error Message -->
          <div v-if="error" class="alert alert-error mb-4">
            <ExclamationTriangleIcon class="h-5 w-5" />
            <div>
              <span class="font-medium">{{ error }}</span>
              <div v-if="errorDetails" class="text-sm mt-1">
                {{ errorDetails }}
              </div>
            </div>
          </div>

          <!-- CORS Warning -->
          <div v-if="showCorsWarning" class="alert alert-warning mb-4">
            <ExclamationTriangleIcon class="h-5 w-5" />
            <div>
              <span class="font-medium">Browser Settings Required</span>
              <div class="text-sm mt-1">
                Please allow popups and cookies for this site to enable Google
                sign-in.
              </div>
            </div>
          </div>

          <!-- Social Login Buttons -->
          <div
            v-if="!loading && !loadingTimeout"
            class="mb-6 grid justify-center"
          >
            <button
              @click="handleGoogleSignIn"
              :disabled="isSigningIn"
              class="btn w-full max-w-sm bg-white hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 shadow-sm disabled:opacity-50"
            >
              <font-awesome-icon
                :icon="['fab', 'google']"
                class="w-5 h-5 mr-2"
              />
              <span v-if="isSigningIn">Signing in...</span>
              <span v-else>Continue with Google</span>
            </button>
          </div>

          <!-- Sign up link -->
          <div class="text-center mt-6">
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?
              <a
                href="#"
                class="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-center text-xs text-gray-500 dark:text-gray-400">
        <p>By signing in, you agree to our</p>
        <p>
          <a href="#" class="hover:underline">Terms of Service</a>
          and
          <a href="#" class="hover:underline">Privacy Policy</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    ExclamationTriangleIcon,
    ShieldCheckIcon,
  } from '@heroicons/vue/24/outline'

  // Set layout for this page
  definePageMeta({
    layout: 'auth',
  })

  // Use our auth composable
  const { user, loading, error, signInWithGoogle } = useAuth()
  const isSigningIn = ref(false)
  const errorDetails = ref('')
  const showCorsWarning = ref(false)
  const loadingTimeout = ref(false)

  // Set a timeout for loading
  onMounted(() => {
    setTimeout(() => {
      if (loading.value) {
        loadingTimeout.value = true
        console.error(
          'Firebase loading timeout - environment variables may not be loaded'
        )
      }
    }, 5000) // 5 second timeout
  })

  // Reload page function
  const reloadPage = () => {
    window.location.reload()
  }

  // Handle Google sign in
  const handleGoogleSignIn = async () => {
    try {
      isSigningIn.value = true
      error.value = ''
      errorDetails.value = ''
      showCorsWarning.value = false

      await signInWithGoogle()

      // Don't navigate immediately - let the auth state listener handle it
      // The user watcher will handle navigation when user state changes
    } catch (err) {
      // Handle specific error types
      if (err.message.includes('popup was blocked')) {
        error.value = 'Popup Blocked'
        errorDetails.value = 'Please allow popups for this site and try again.'
        showCorsWarning.value = true
      } else if (err.message.includes('unauthorized domain')) {
        error.value = 'Domain Not Authorized'
        errorDetails.value =
          'This domain is not configured for authentication. Please contact support.'
      } else if (err.message.includes('cancelled')) {
        error.value = 'Sign-in Cancelled'
        errorDetails.value = 'You cancelled the sign-in process.'
      } else {
        error.value = 'Sign-in Failed'
        errorDetails.value =
          err.message || 'An unexpected error occurred. Please try again.'
      }
    } finally {
      isSigningIn.value = false
    }
  }

  // Redirect if already logged in
  watch(
    user,
    newUser => {
      if (newUser) {
        navigateTo('/dashboard')
      }
    },
    { immediate: true }
  )

  // Check for CORS issues on mount
  onMounted(() => {
    // Check if we're in a secure context
    if (
      window.location.protocol !== 'https:' &&
      window.location.hostname !== 'localhost'
    ) {
      showCorsWarning.value = true
      error.value = 'Security Warning'
      errorDetails.value =
        'This site requires HTTPS for authentication to work properly.'
    }
  })
</script>

<style scoped>
  /* Custom gradient background */
  .bg-gradient-to-br {
    background: linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%);
  }

  /* Dark mode gradient */
  .dark .bg-gradient-to-br {
    background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  }
</style>
