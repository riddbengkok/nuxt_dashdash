<template>
  <div class="drawer lg:drawer-open">
    <input
      id="dashboard-drawer"
      type="checkbox"
      class="drawer-toggle"
      v-model="isDrawerOpen"
    />

    <div class="drawer-content flex flex-col">
      <!-- Top Navigation Bar -->
      <div
        class="w-full navbar bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm border-b border-gray-200 dark:border-gray-700"
      >
        <div class="flex-none lg:hidden">
          <label for="dashboard-drawer" class="btn btn-square btn-ghost">
            <Bars3Icon class="h-6 w-6" />
          </label>
        </div>

        <!-- Logo/Brand -->
        <div class="flex-1">
          <h3 class="text-lg ml-4 font-semibold">OSKA DASHDASH</h3>
        </div>

        <!-- Right side menu -->
        <div class="flex-none flex items-center space-x-4">
          <!-- Theme Dropdown -->
          <div class="dropdown dropdown-end">
            <label
              tabindex="0"
              class="btn btn-ghost btn-circle flex items-center justify-center"
            >
              <component
                :is="themeIcon"
                class="h-5 w-5 mr-0.5"
                :class="themeIconColor"
              />
            </label>
            <ul
              tabindex="0"
              class="dropdown-content menu menu-sm p-2 shadow bg-white dark:bg-gray-800 rounded-box w-36 z-50"
            >
              <li>
                <a @click.prevent="setTheme('light')">
                  <SunIcon class="h-4 w-4 text-yellow-500 mr-2" /> Light
                </a>
              </li>
              <li>
                <a @click.prevent="setTheme('dark')">
                  <MoonIcon
                    class="h-4 w-4 text-gray-600 dark:text-gray-400 mr-2"
                  />
                  Dark
                </a>
              </li>
              <li>
                <a @click.prevent="setTheme('sokle')">
                  <Cog6ToothIcon class="h-4 w-4 text-pink-500 mr-2" /> Sokle
                </a>
              </li>
            </ul>
          </div>

          <!-- User Menu -->
          <div v-if="user" class="dropdown dropdown-end">
            <div
              tabindex="0"
              role="button"
              class="btn btn-ghost btn-circle avatar"
            >
              <div class="w-10 rounded-full">
                <img
                  v-if="user.photoURL"
                  :src="user.photoURL"
                  :alt="user.displayName"
                  class="rounded-full"
                />
                <div
                  v-else
                  class="bg-indigo-600 text-white rounded-full flex items-center justify-center"
                >
                  <UserIcon class="h-5 w-5" />
                </div>
              </div>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white dark:bg-gray-800 rounded-box w-52"
            >
              <li class="menu-title">
                <span class="text-sm font-medium text-gray-900 dark:text-white">
                  {{ user.displayName }}
                </span>
              </li>
              <li class="menu-title">
                <span class="text-xs text-gray-600 dark:text-gray-400">
                  {{ user.email }}
                </span>
              </li>
              <div class="divider my-2"></div>
              <li>
                <button
                  @click="handleSignOut"
                  :disabled="isSigningOut"
                  class="text-red-600 dark:text-red-400"
                >
                  <ArrowRightOnRectangleIcon class="h-4 w-4" />
                  <span v-if="isSigningOut">Signing out...</span>
                  <span v-else>Sign out</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex-1 overflow-y-auto">
        <slot />
      </div>
    </div>

    <!-- Sidebar -->
    <div class="drawer-side">
      <label
        for="dashboard-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <aside
        class="min-h-full w-80 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white border-r border-gray-200 dark:border-gray-700"
      >
        <!-- Sidebar Header -->
        <div class="p-4 border-b border-gray-200 dark:border-gray-700">
          <div class="flex items-center space-x-3">
            <div
              class="h-10 w-10 bg-indigo-600 rounded-full flex items-center justify-center"
            >
              <ShieldCheckIcon class="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
                Dashboard
              </h2>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Admin Panel
              </p>
            </div>
          </div>
        </div>

        <!-- Navigation Menu -->
        <nav class="p-4">
          <ul class="menu menu-lg">
            <li class="menu-title">
              <span
                class="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider"
              >
                Main Navigation
              </span>
            </li>

            <li>
              <NuxtLink
                to="/dashboard"
                class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white"
              >
                <HomeIcon class="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <span>Dashboard</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/tiktok"
                class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white"
              >
                <svg
                  class="h-5 w-5 text-pink-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M9 3v12a4 4 0 104 4h1"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle cx="17" cy="5" r="2" fill="currentColor" />
                </svg>
                <span>TikTok</span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                to="/analytics"
                class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white"
              >
                <ChartBarIcon
                  class="h-5 w-5 text-gray-600 dark:text-gray-400"
                />
                <span>Analytics</span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                to="/users"
                class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white"
              >
                <UsersIcon class="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <span>Users</span>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                to="/settings"
                class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white"
              >
                <Cog6ToothIcon
                  class="h-5 w-5 text-gray-600 dark:text-gray-400"
                />
                <span>Settings</span>
              </NuxtLink>
            </li>

            <div class="divider my-4"></div>

            <li class="menu-title">
              <span
                class="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider"
              >
                Tools
              </span>
            </li>

            <li>
              <NuxtLink
                to="/test-firebase"
                class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white"
              >
                <FireIcon class="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <span>Firebase Test</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/kits"
                class="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white"
              >
                <Cog6ToothIcon
                  class="h-5 w-5 text-gray-600 dark:text-gray-400"
                />
                <span>UI Kit</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Sidebar Footer -->
        <div
          class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-700"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span class="text-sm text-gray-600 dark:text-gray-400"
                >Online</span
              >
            </div>
            <!-- Theme Dropdown (Sidebar Footer) -->
            <div class="dropdown dropdown-top">
              <label
                tabindex="0"
                class="btn btn-ghost btn-sm flex items-center justify-center"
              >
                <component
                  :is="themeIcon"
                  class="h-4 w-4 mr-0.5"
                  :class="themeIconColor"
                />
              </label>
              <ul
                tabindex="0"
                class="dropdown-content menu menu-sm p-2 shadow bg-white dark:bg-gray-800 rounded-box w-36 z-50"
              >
                <li>
                  <a @click.prevent="setTheme('light')">
                    <SunIcon class="h-4 w-4 text-yellow-500 mr-2" /> Light
                  </a>
                </li>
                <li>
                  <a @click.prevent="setTheme('dark')">
                    <MoonIcon
                      class="h-4 w-4 text-gray-600 dark:text-gray-400 mr-2"
                    />
                    Dark
                  </a>
                </li>
                <li>
                  <a @click.prevent="setTheme('sokle')">
                    <Cog6ToothIcon class="h-4 w-4 text-pink-500 mr-2" /> Sokle
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
  import {
    ArrowRightOnRectangleIcon,
    Bars3Icon,
    ChartBarIcon,
    Cog6ToothIcon,
    FireIcon,
    HomeIcon,
    MoonIcon,
    ShieldCheckIcon,
    SunIcon,
    UserIcon,
    UsersIcon,
  } from '@heroicons/vue/24/outline'

  // Use our auth composable
  const { user, signOut } = useAuth()
  const isSigningOut = ref(false)

  // Use theme composable
  const { isDark, setTheme } = useTheme()

  // Get current route
  const route = useRoute()

  // Drawer state
  const isDrawerOpen = ref(false)

  // Handle sign out
  const handleSignOut = async () => {
    try {
      isSigningOut.value = true
      await signOut()
      await navigateTo('/login')
    } catch (err) {
      console.error('Sign out error:', err)
    } finally {
      isSigningOut.value = false
    }
  }

  // Close drawer on route change (mobile)
  watch(
    () => route.path,
    () => {
      if (window.innerWidth < 1024) {
        isDrawerOpen.value = false
      }
    }
  )

  // Theme icon and color for dropdown button
  const themeIcon = computed(() => {
    const theme =
      (process.client && localStorage.getItem('theme')) ||
      (isDark.value ? 'dark' : 'light')
    if (theme === 'dark') return MoonIcon
    if (theme === 'sokle') return Cog6ToothIcon
    return SunIcon
  })
  const themeIconColor = computed(() => {
    const theme =
      (process.client && localStorage.getItem('theme')) ||
      (isDark.value ? 'dark' : 'light')
    if (theme === 'dark') return 'text-gray-600 dark:text-gray-400'
    if (theme === 'sokle') return 'text-pink-500'
    return 'text-yellow-500'
  })
</script>

<style scoped>
  /* Custom styles for better drawer experience */
  .drawer-side {
    z-index: 50;
  }

  .menu-title {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  .menu-title:first-child {
    margin-top: 0;
  }

  /* Active link styles */
  .router-link-active {
    color: #3fc1c9;
  }

  .router-link-active svg {
    color: #3fc1c9;
  }

  /* Hover effects use DaisyUI classes now */
</style>
