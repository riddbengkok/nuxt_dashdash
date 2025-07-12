<template>
  <nav class="bg-white shadow-sm border-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo/Brand -->
        <div class="flex items-center">
          <NuxtLink to="/dashboard" class="flex items-center space-x-2">
            <div class="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center">
              <ShieldCheckIcon class="h-5 w-5 text-white" />
            </div>
            <h1 class="text-xl font-semibold text-gray-900">Dashboard</h1>
          </NuxtLink>
        </div>

        <!-- User Menu -->
        <div class="flex items-center space-x-4">
          <!-- User Info -->
          <div v-if="user" class="flex items-center space-x-3">
            <img 
              v-if="user.photoURL" 
              :src="user.photoURL" 
              :alt="user.displayName"
              class="h-8 w-8 rounded-full"
            />
            <div class="hidden sm:block text-sm">
              <p class="font-medium text-gray-900">{{ user.displayName }}</p>
              <p class="text-gray-500">{{ user.email }}</p>
            </div>
          </div>

          <!-- Sign Out Button -->
          <button 
            @click="handleSignOut"
            :disabled="isSigningOut"
            class="btn btn-sm btn-neutral	"
          >
            <span v-if="isSigningOut">Signing out...</span>
            <span v-else>Sign out</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ShieldCheckIcon } from '@heroicons/vue/24/outline'

// Use our auth composable
const { user, signOut } = useAuth()
const isSigningOut = ref(false)

// Handle sign out
const handleSignOut = async () => {
  try {
    isSigningOut.value = true
    console.log('Navigation: Starting sign out...')
    await signOut()
    console.log('Navigation: Sign out successful')
    await navigateTo('/login')
  } catch (err) {
    console.error('Navigation: Sign out error:', err)
  } finally {
    isSigningOut.value = false
  }
}
</script> 