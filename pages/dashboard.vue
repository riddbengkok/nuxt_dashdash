<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <Navigation />
    
    <!-- Main Content -->
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <!-- Loading State -->
        <div v-if="loading" class="text-center py-8">
          <div class="loading loading-spinner loading-lg"></div>
          <p class="mt-4 text-gray-600">Loading user data...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="alert alert-error">
          <span>{{ error }}</span>
        </div>

        <!-- Dashboard Content -->
        <div v-else-if="user" class="card bg-white shadow">
          <div class="card-body">
            <h2 class="card-title text-black">Welcome to your Dashboard!</h2>
            <p class="text-gray-600">
              You have successfully signed in with Google. This is a static deployment that works on GitHub Pages.
            </p>
            
            <!-- User Info Card -->
            <div class="mt-6 p-4 bg-gray-50 rounded-lg">
              <h3 class="text-lg font-medium text-gray-900 mb-4">Your Profile</h3>
              <div class="space-y-2">
                <div class="flex items-center space-x-2">
                  <span class="font-medium text-gray-700">Name:</span>
                  <span>{{ user.displayName }}</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="font-medium text-gray-700">Email:</span>
                  <span>{{ user.email }}</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="font-medium text-gray-700">User ID:</span>
                  <span class="text-sm text-gray-500">{{ user.uid }}</span>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="font-medium text-gray-700">Email Verified:</span>
                  <span class="text-sm" :class="user.emailVerified ? 'text-green-600' : 'text-red-600'">
                    {{ user.emailVerified ? 'Yes' : 'No' }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Token Info Card -->
            <div class="mt-6 p-4 bg-yellow-50 rounded-lg">
              <h3 class="text-lg font-medium text-yellow-900 mb-4">Token Information</h3>
              <div class="space-y-2">
                <div class="flex items-center space-x-2">
                  <span class="font-medium text-yellow-700">Token Status:</span>
                  <span class="text-sm" :class="isTokenExpired ? 'text-red-600' : 'text-green-600'">
                    {{ isTokenExpired ? 'Expired' : 'Valid' }}
                  </span>
                </div>
                <div v-if="tokenExpiry" class="flex items-center space-x-2">
                  <span class="font-medium text-yellow-700">Expires At:</span>
                  <span class="text-sm text-yellow-600">{{ tokenExpiry.toLocaleString() }}</span>
                </div>
                <div v-if="tokenExpiry" class="flex items-center space-x-2">
                  <span class="font-medium text-yellow-700">Time Until Expiry:</span>
                  <span class="text-sm" :class="getTimeUntilExpiryColor()">
                    {{ getTimeUntilExpiry() }}
                  </span>
                </div>
                <button 
                  @click="refreshToken"
                  class="btn btn-warning btn-sm mt-2"
                >
                  Refresh Token
                </button>
              </div>
            </div>

            <!-- Debug Info (remove in production) -->
            <div class="mt-4 p-4 bg-blue-50 rounded-lg">
              <h4 class="font-medium text-blue-900 mb-2">Debug Info:</h4>
              <!-- <pre class="text-xs text-blue-700">{{ JSON.stringify(user, null, 2) }}</pre> -->
              <div class="text-xs text-blue-700">
                <p>User ID: {{ user.uid }}</p>
                <p>Email: {{ user.email }}</p>
                <p>Display Name: {{ user.displayName }}</p>
                <p>Token Expired: {{ isTokenExpired }}</p>
                <p v-if="tokenExpiry">Token Expiry: {{ tokenExpiry.toLocaleString() }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- No User State -->
        <div v-else class="card bg-white shadow">
          <div class="card-body text-center">
            <h2 class="card-title">Not Authenticated</h2>
            <p class="text-gray-600 mb-4">You need to sign in to access the dashboard.</p>
            <button @click="goToLogin" class="btn btn-primary">
              Go to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Use our auth composable
const { user, loading, error, tokenExpiry, isTokenExpired, refreshToken } = useAuth()

// Debug: Log user state changes
watch(user, (newUser) => {
  console.log('Dashboard: User state changed:', newUser)
  if (newUser) {
    console.log('Dashboard: User details:', {
      uid: newUser.uid,
      email: newUser.email,
      displayName: newUser.displayName,
      photoURL: newUser.photoURL,
      emailVerified: newUser.emailVerified
    })
  }
}, { immediate: true })

// Debug: Log loading and error states
watch(loading, (newLoading) => {
  console.log('Dashboard: Loading state changed:', newLoading)
})

watch(error, (newError) => {
  console.log('Dashboard: Error state changed:', newError)
})

// Watch token expiry
watch(tokenExpiry, (newExpiry) => {
  console.log('Dashboard: Token expiry changed:', newExpiry)
})

watch(isTokenExpired, (newExpired) => {
  console.log('Dashboard: Token expired status:', newExpired)
})

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
  if (!tokenExpiry.value) return 'text-gray-600'
  
  const now = new Date()
  const diffMs = tokenExpiry.value - now
  const diffMins = Math.floor(diffMs / 1000 / 60)
  
  if (diffMs < 0) return 'text-red-600'
  if (diffMins < 5) return 'text-red-600'
  if (diffMins < 30) return 'text-yellow-600'
  return 'text-green-600'
}

// Go to login page
const goToLogin = () => {
  navigateTo('/login')
}

// Redirect to login if not authenticated (with delay to allow auth state to settle)
onMounted(() => {
  console.log('Dashboard: Component mounted')
  console.log('Dashboard: Initial user state:', user.value)
  console.log('Dashboard: Initial loading state:', loading.value)
  
  // Wait a bit for auth state to settle, then redirect if no user
  setTimeout(() => {
    if (!user.value && !loading.value) {
      console.log('Dashboard: No user found, redirecting to login')
      navigateTo('/login')
    }
  }, 2000)
})
</script> 