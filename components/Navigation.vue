<template>
  <nav
    class="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo/Brand -->
        <div class="flex items-center">
          <NuxtLink to="/dashboard" class="flex items-center space-x-2">
            <h1 class="text-xl font-semibold text-gray-900 dark:text-white">
              Dashboard
            </h1>
          </NuxtLink>
        </div>

        <!-- Right side menu -->
        <div class="flex items-center space-x-4">
          <!-- Theme Toggle -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <SunIcon v-if="isDark" class="h-5 w-5 text-yellow-500" />
            <MoonIcon v-else class="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>

          <!-- User Menu -->
          <div v-if="user" class="flex items-center space-x-3">
            <img
              v-if="user.photoURL"
              :src="user.photoURL"
              :alt="user.displayName"
              class="h-8 w-8 rounded-full"
            />
            <div class="hidden sm:block text-sm">
              <p class="font-medium text-gray-900 dark:text-white">
                {{ user.displayName }}
              </p>
              <p class="text-gray-500 dark:text-gray-400">{{ user.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

  // Use our auth composable
  const { user } = useAuth()

  // Use theme composable
  const { isDark, toggleTheme } = useTheme()
</script>
