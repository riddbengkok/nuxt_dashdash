<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4"
  >
    <div class="max-w-md w-full space-y-8">
      <div class="card bg-white dark:bg-gray-800 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-black dark:text-white">Firebase Test</h2>

          <!-- Firebase Config Display -->
          <div class="space-y-4">
            <div>
              <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                Firebase Configuration:
              </h3>
              <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
                <pre class="text-gray-800 dark:text-gray-200">{{
                  firebaseConfigDisplay
                }}</pre>
              </div>
            </div>

            <!-- Test Connection -->
            <div>
              <h3 class="font-medium text-gray-900 dark:text-white mb-2">
                Connection Test:
              </h3>
              <div class="space-y-2">
                <div class="flex items-center space-x-2">
                  <div
                    class="w-3 h-3 rounded-full"
                    :class="
                      connectionStatus === 'success'
                        ? 'bg-green-500'
                        : connectionStatus === 'error'
                          ? 'bg-red-500'
                          : 'bg-yellow-500'
                    "
                  ></div>
                  <span class="text-gray-700 dark:text-gray-300">{{
                    connectionMessage
                  }}</span>
                </div>
              </div>
            </div>

            <!-- Test Button -->
            <button
              @click="testFirebaseConnection"
              class="btn btn-primary w-full"
              :disabled="isTesting"
            >
              {{ isTesting ? 'Testing...' : 'Test Firebase Connection' }}
            </button>

            <!-- Error Display -->
            <div v-if="error" class="alert alert-error">
              <span>{{ error }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { $firebase } = useNuxtApp()

  const connectionStatus = ref('pending')
  const connectionMessage = ref('Not tested yet')
  const error = ref('')
  const isTesting = ref(false)

  // Firebase config for display (without sensitive data)
  const firebaseConfigDisplay = computed(() => {
    return `Project ID: nuxt-dashdash
Auth Domain: nuxt-dashdash.firebaseapp.com
Storage Bucket: nuxt-dashdash.firebasestorage.app
Messaging Sender ID: 285552934341
App ID: 1:285552934341:web:19ee5473fe483602929fac
Measurement ID: G-8V4CC0302V`
  })

  const testFirebaseConnection = async () => {
    try {
      isTesting.value = true
      error.value = ''
      connectionStatus.value = 'pending'
      connectionMessage.value = 'Testing connection...'

      // Test if Firebase is initialized
      if (!$firebase || !$firebase.auth) {
        throw new Error('Firebase not initialized')
      }

      // Test auth state
      const auth = $firebase.auth
      console.log('Firebase Auth:', auth)

      // Try to get current user (this will test the connection)
      const currentUser = auth.currentUser
      console.log('Current User:', currentUser)

      connectionStatus.value = 'success'
      connectionMessage.value = 'Firebase connection successful!'
    } catch (err) {
      console.error('Firebase test error:', err)
      connectionStatus.value = 'error'
      connectionMessage.value = 'Connection failed'
      error.value = err.message
    } finally {
      isTesting.value = false
    }
  }

  // Test on mount
  onMounted(() => {
    testFirebaseConnection()
  })
</script>
