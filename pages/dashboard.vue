<template>
  <!-- Loading State -->
  <div v-if="loading" class="text-center py-8">
    <div class="loading loading-spinner loading-lg"></div>
    <p class="mt-4 text-gray-600 dark:text-gray-400">Loading user data...</p>
  </div>

  <!-- Error State -->
  <div v-else-if="error" class="alert alert-error">
    <span>{{ error }}</span>
  </div>

  <!-- Dashboard Content -->
  <div v-else-if="user" class="space-y-6">
    <!-- Welcome Header -->
    <div class="card bg-white dark:bg-gray-800 shadow">
      <div class="card-body">
        <h2 class="card-title text-black dark:text-white">
          Welcome to your Dashboard!
        </h2>
        <p class="text-gray-600 dark:text-gray-400">
          You have successfully signed in with Google. This is a static
          deployment that works on GitHub Pages.
        </p>
      </div>
    </div>

    <!-- User Info Card -->
    <div class="card bg-white dark:bg-gray-800 shadow">
      <div class="card-body">
        <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Your Profile
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-2">
            <div class="flex items-center space-x-2">
              <span class="font-medium text-gray-700 dark:text-gray-300"
                >Name:</span
              >
              <span class="text-gray-900 dark:text-white">{{
                user.displayName
              }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="font-medium text-gray-700 dark:text-gray-300"
                >Email:</span
              >
              <span class="text-gray-900 dark:text-white">{{
                user.email
              }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="font-medium text-gray-700 dark:text-gray-300"
                >User ID:</span
              >
              <span class="text-sm text-gray-500 dark:text-gray-400">{{
                user.uid
              }}</span>
            </div>
            <div class="flex items-center space-x-2">
              <span class="font-medium text-gray-700 dark:text-gray-300"
                >Email Verified:</span
              >
              <span
                class="text-sm"
                :class="
                  user.emailVerified
                    ? 'text-green-600 dark:text-green-400'
                    : 'text-red-600 dark:text-red-400'
                "
              >
                {{ user.emailVerified ? 'Yes' : 'No' }}
              </span>
            </div>
          </div>

          <!-- User Avatar -->
          <div class="flex justify-center md:justify-end">
            <div class="avatar">
              <div
                class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
              >
                <img
                  v-if="user.photoURL"
                  :src="user.photoURL"
                  :alt="user.displayName"
                />
                <div
                  v-else
                  class="bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold"
                >
                  {{ user.displayName?.charAt(0) || 'U' }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Token Info Card -->
    <div class="card bg-yellow-50 dark:bg-yellow-900/20 shadow">
      <div class="card-body">
        <h3
          class="text-lg font-medium text-yellow-900 dark:text-yellow-200 mb-4"
        >
          Token Information
        </h3>
        <div class="space-y-2">
          <div class="flex items-center space-x-2">
            <span class="font-medium text-yellow-700 dark:text-yellow-300"
              >Token Status:</span
            >
            <span
              class="text-sm"
              :class="
                isTokenExpired
                  ? 'text-red-600 dark:text-red-400'
                  : 'text-green-600 dark:text-green-400'
              "
            >
              {{ isTokenExpired ? 'Expired' : 'Valid' }}
            </span>
          </div>
          <div v-if="tokenExpiry" class="flex items-center space-x-2">
            <span class="font-medium text-yellow-700 dark:text-yellow-300"
              >Expires At:</span
            >
            <span class="text-sm text-yellow-600 dark:text-yellow-400">
              {{ tokenExpiry.toLocaleString() }}
            </span>
          </div>
          <div v-if="tokenExpiry" class="flex items-center space-x-2">
            <span class="font-medium text-yellow-700 dark:text-yellow-300"
              >Time Until Expiry:</span
            >
            <span class="text-sm" :class="getTimeUntilExpiryColor()">
              {{ getTimeUntilExpiry() }}
            </span>
          </div>
          <button @click="refreshToken" class="btn btn-warning btn-sm mt-2">
            Refresh Token
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- No User State -->
  <div v-else class="card bg-white dark:bg-gray-800 shadow">
    <div class="card-body text-center">
      <h2 class="card-title text-black dark:text-white">Not Authenticated</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        You need to sign in to access the dashboard.
      </p>
      <button @click="goToLogin" class="btn btn-primary">Go to Login</button>
    </div>
  </div>
</template>

<script setup>
  // Set page meta
  definePageMeta({
    layout: 'default',
  })

  // Use our auth composable
  const { user, loading, error, tokenExpiry, isTokenExpired, refreshToken } =
    useAuth()

  // Helper functions for token display
  const getTimeUntilExpiry = () => {
    if (!tokenExpiry.value) return 'Unknown'

    const now = new Date()
    const diffMs = tokenExpiry.value - now
    const diffMins = Math.floor(diffMs / 1000 / 60)
    const diffHours = Math.floor(diffMins / 60)
    const diffDays = Math.floor(diffHours / 24)

    if (diffMs < 0) return 'Expired'
    if (diffDays > 0) return `${diffDays} day(s)`
    if (diffHours > 0) return `${diffHours} hour(s)`
    if (diffMins > 0) return `${diffMins} minute(s)`
    return 'Less than 1 minute'
  }

  const getTimeUntilExpiryColor = () => {
    if (!tokenExpiry.value) return 'text-gray-600 dark:text-gray-400'

    const now = new Date()
    const diffMs = tokenExpiry.value - now
    const diffMins = Math.floor(diffMs / 1000 / 60)

    if (diffMs < 0) return 'text-red-600 dark:text-red-400'
    if (diffMins < 5) return 'text-red-600 dark:text-red-400'
    if (diffMins < 30) return 'text-yellow-600 dark:text-yellow-400'
    return 'text-green-600 dark:text-green-400'
  }

  // Go to login page
  const goToLogin = () => {
    navigateTo('/login')
  }

  // Redirect to login if not authenticated (with delay to allow auth state to settle)
  onMounted(() => {
    // Wait a bit for auth state to settle, then redirect if no user
    setTimeout(() => {
      if (!user.value && !loading.value) {
        navigateTo('/login')
      }
    }, 2000)
  })
</script>
