<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="card bg-white dark:bg-gray-800 shadow">
      <div class="card-body">
        <h1 class="card-title text-black dark:text-white">Settings</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Manage your application settings and preferences.
        </p>
      </div>
    </div>

    <!-- Settings Sections -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- General Settings -->
      <div class="card bg-white dark:bg-gray-800 shadow">
        <div class="card-body">
          <h3 class="card-title text-black dark:text-white mb-4">
            General Settings
          </h3>
          <div class="space-y-4">
            <div class="form-control">
              <label class="label">
                <span class="label-text text-gray-900 dark:text-white"
                  >Application Name</span
                >
              </label>
              <input
                type="text"
                placeholder="My Dashboard"
                class="input input-bordered bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
              />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text text-gray-900 dark:text-white"
                  >Language</span
                >
              </label>
              <select
                class="select select-bordered bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
              >
                <option class="text-gray-900 dark:text-white">English</option>
                <option class="text-gray-900 dark:text-white">Spanish</option>
                <option class="text-gray-900 dark:text-white">French</option>
              </select>
            </div>

            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text text-gray-900 dark:text-white"
                  >Enable Notifications</span
                >
                <input
                  type="checkbox"
                  class="toggle toggle-primary bg-gray-200 dark:bg-gray-700 border-gray-400 dark:border-gray-600"
                  checked
                />
              </label>
            </div>

            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text text-gray-900 dark:text-white"
                  >Auto-save</span
                >
                <input
                  type="checkbox"
                  class="toggle toggle-primary bg-gray-200 dark:bg-gray-700 border-gray-400 dark:border-gray-600"
                  checked
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Theme Settings -->
      <div class="card bg-white dark:bg-gray-800 shadow">
        <div class="card-body">
          <h3 class="card-title text-black dark:text-white mb-4">Appearance</h3>
          <div class="space-y-4">
            <div class="form-control">
              <label class="label">
                <span class="label-text text-gray-900 dark:text-white"
                  >Theme</span
                >
              </label>
              <select
                class="select select-bordered bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                v-model="selectedTheme"
                @change="handleThemeChange"
              >
                <option class="text-gray-900 dark:text-white">System</option>
                <option class="text-gray-900 dark:text-white">Light</option>
                <option class="text-gray-900 dark:text-white">Dark</option>
                <option class="text-gray-900 dark:text-white">Sokle</option>
              </select>
            </div>

            <!-- Theme Toggle Switch -->
            <div class="form-control mt-2">
              <label
                class="label cursor-pointer flex items-center justify-between"
              >
                <span
                  class="label-text text-gray-900 dark:text-white flex items-center"
                >
                  <SunIcon
                    v-if="!isDark"
                    class="h-5 w-5 text-yellow-500 mr-2"
                  />
                  <MoonIcon v-else class="h-5 w-5 text-gray-400 mr-2" />
                  <span>{{ isDark ? 'Dark Mode' : 'Light Mode' }}</span>
                </span>
                <input
                  type="checkbox"
                  class="toggle toggle-primary"
                  :checked="isDark"
                  @change="toggleTheme"
                />
              </label>
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text text-gray-900 dark:text-white"
                  >Primary Color</span
                >
              </label>
              <div class="flex space-x-2">
                <div
                  class="w-8 h-8 bg-blue-500 rounded-full cursor-pointer border-2 border-blue-500"
                ></div>
                <div
                  class="w-8 h-8 bg-green-500 rounded-full cursor-pointer border-2 border-transparent"
                ></div>
                <div
                  class="w-8 h-8 bg-purple-500 rounded-full cursor-pointer border-2 border-transparent"
                ></div>
                <div
                  class="w-8 h-8 bg-red-500 rounded-full cursor-pointer border-2 border-transparent"
                ></div>
              </div>
            </div>

            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text text-gray-900 dark:text-white"
                  >Show Sidebar</span
                >
                <input
                  type="checkbox"
                  class="toggle toggle-primary bg-gray-200 dark:bg-gray-700 border-gray-400 dark:border-gray-600"
                  checked
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Security Settings -->
      <div class="card bg-white dark:bg-gray-800 shadow">
        <div class="card-body">
          <h3 class="card-title text-black dark:text-white mb-4">Security</h3>
          <div class="space-y-4">
            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text text-gray-900 dark:text-white"
                  >Two-Factor Authentication</span
                >
                <input
                  type="checkbox"
                  class="toggle toggle-primary bg-gray-200 dark:bg-gray-700 border-gray-400 dark:border-gray-600"
                />
              </label>
            </div>

            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text text-gray-900 dark:text-white"
                  >Session Timeout</span
                >
                <input
                  type="checkbox"
                  class="toggle toggle-primary bg-gray-200 dark:bg-gray-700 border-gray-400 dark:border-gray-600"
                  checked
                />
              </label>
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text text-gray-900 dark:text-white"
                  >Session Duration (minutes)</span
                >
              </label>
              <input
                type="number"
                placeholder="30"
                class="input input-bordered bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
              />
            </div>

            <button class="btn btn-warning btn-sm">
              <ShieldCheckIcon class="h-4 w-4 mr-2" />
              Change Password
            </button>
          </div>
        </div>
      </div>

      <!-- Notifications Settings -->
      <div class="card bg-white dark:bg-gray-800 shadow">
        <div class="card-body">
          <h3 class="card-title text-black dark:text-white mb-4">
            Notifications
          </h3>
          <div class="space-y-4">
            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text text-gray-900 dark:text-white"
                  >Email Notifications</span
                >
                <input
                  type="checkbox"
                  class="toggle toggle-primary bg-gray-200 dark:bg-gray-700 border-gray-400 dark:border-gray-600"
                  checked
                />
              </label>
            </div>

            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text text-gray-900 dark:text-white"
                  >Push Notifications</span
                >
                <input
                  type="checkbox"
                  class="toggle toggle-primary bg-gray-200 dark:bg-gray-700 border-gray-400 dark:border-gray-600"
                />
              </label>
            </div>

            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text text-gray-900 dark:text-white"
                  >System Alerts</span
                >
                <input
                  type="checkbox"
                  class="toggle toggle-primary bg-gray-200 dark:bg-gray-700 border-gray-400 dark:border-gray-600"
                  checked
                />
              </label>
            </div>

            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text text-gray-900 dark:text-white"
                  >Weekly Reports</span
                >
                <input
                  type="checkbox"
                  class="toggle toggle-primary bg-gray-200 dark:bg-gray-700 border-gray-400 dark:border-gray-600"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Save Button -->
    <div class="flex justify-end space-x-2">
      <button class="btn btn-ghost">Cancel</button>
      <button class="btn btn-primary">
        <Cog6ToothIcon class="h-4 w-4 mr-2" />
        Save Settings
      </button>
    </div>
  </div>
</template>

<script setup>
  import {
    Cog6ToothIcon,
    MoonIcon,
    ShieldCheckIcon,
    SunIcon,
  } from '@heroicons/vue/24/outline'
  const { isDark, toggleTheme, setTheme } = useTheme()

  // Theme select logic
  const selectedTheme = ref('System')

  // On mount, set selectedTheme based on current theme
  onMounted(() => {
    if (localStorage.getItem('theme') === 'sokle') {
      selectedTheme.value = 'Sokle'
    } else if (localStorage.getItem('theme') === 'dark') {
      selectedTheme.value = 'Dark'
    } else if (localStorage.getItem('theme') === 'light') {
      selectedTheme.value = 'Light'
    } else {
      selectedTheme.value = 'System'
    }
  })

  // Handle theme change
  const handleThemeChange = () => {
    if (selectedTheme.value === 'System') {
      setTheme('light') // fallback to light, but you can implement system logic
      localStorage.removeItem('theme')
      document.documentElement.setAttribute('data-theme', 'light')
    } else if (selectedTheme.value === 'Light') {
      setTheme('light')
      localStorage.setItem('theme', 'light')
      document.documentElement.setAttribute('data-theme', 'light')
    } else if (selectedTheme.value === 'Dark') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    } else if (selectedTheme.value === 'Sokle') {
      localStorage.setItem('theme', 'sokle')
      document.documentElement.setAttribute('data-theme', 'sokle')
    }
  }

  // Set page meta
  definePageMeta({
    layout: 'default',
  })

  // Set page title
  useHead({
    title: 'Settings - Dashboard',
  })
</script>
