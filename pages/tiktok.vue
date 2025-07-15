<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4"
  >
    <div
      class="w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
    >
      <h1
        class="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center"
      >
        TikTok Integration
      </h1>
      <div class="space-y-6">
        <p class="text-gray-700 dark:text-gray-300 text-center">
          Connect your dashboard to TikTok and fetch your account data.
        </p>
        <button class="btn btn-primary w-full" @click="connectToTikTok">
          Connect TikTok Account
        </button>
        <div v-if="error" class="alert alert-error mt-4">
          <span>{{ error }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const clientKey = 'sbawzgzppzcpwr770v' // <-- Replace with your real client key!

  const redirectUri = encodeURIComponent(
    `${window.location.origin}/tiktok-callback`
  ) // <-- Replace with your deployed callback URL
  const scope = 'user.info.basic' // Add more scopes as needed

  const error = ref('')

  function connectToTikTok() {
    error.value = ''
    const state = Math.random().toString(36).substring(2, 15) // random string for CSRF protection
    window.location.href =
      `https://www.tiktok.com/v2/auth/authorize/` +
      `?client_key=${clientKey}` +
      `&response_type=code` +
      `&scope=${scope}` +
      `&redirect_uri=${redirectUri}` +
      `&state=${state}`
  }
</script>
