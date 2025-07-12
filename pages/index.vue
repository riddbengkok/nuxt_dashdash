<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
    <div class="text-center">
      <div class="loading loading-spinner loading-lg"></div>
      <p class="mt-4 text-gray-600">Redirecting...</p>
    </div>
  </div>
</template>

<script setup>
// Set layout for this page
definePageMeta({
  layout: 'auth'
})

// Use our auth composable
const { user, loading } = useAuth()

// Redirect based on auth state
watch([user, loading], ([newUser, newLoading]) => {
  if (!newLoading) {
    if (newUser) {
      console.log('Index: User authenticated, redirecting to dashboard')
      navigateTo('/dashboard')
    } else {
      console.log('Index: No user, redirecting to login')
      navigateTo('/login')
    }
  }
}, { immediate: true })

// Fallback redirect if auth state doesn't change
onMounted(() => {
  setTimeout(() => {
    if (loading.value) {
      console.log('Index: Auth timeout, redirecting to login')
      navigateTo('/login')
    }
  }, 3000)
})
</script>

<style scoped>
.bg-gradient-to-br {
  background: linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%);
}
</style> 