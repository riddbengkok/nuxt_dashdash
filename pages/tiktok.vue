<template>
  <div class="space-y-6">
    <div class="card bg-white dark:bg-gray-800 shadow">
      <div class="card-body">
        <h1 class="card-title text-black dark:text-white">
          TikTok Integration
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          Connect your dashboard to TikTok and fetch your account data.
        </p>
      </div>
    </div>

    <div class="card bg-white dark:bg-gray-800 shadow">
      <div class="card-body">
        <h3 class="card-title text-black dark:text-white mb-4">
          Connect to TikTok
        </h3>
        <button class="btn btn-primary" @click="connectToTikTok">
          Connect TikTok Account
        </button>
        <div v-if="error" class="alert alert-error mt-4">
          <span>{{ error }}</span>
        </div>
        <div v-if="tiktokData" class="mt-6">
          <h4 class="font-bold mb-2">TikTok Data:</h4>
          <pre
            class="bg-gray-100 dark:bg-gray-700 p-2 rounded text-sm text-gray-800 dark:text-gray-200"
            >{{ tiktokData }}</pre
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const error = ref('')
  const tiktokData = ref('')

  // Placeholder for TikTok OAuth flow
  function connectToTikTok() {
    error.value = ''
    // TODO: Implement TikTok OAuth flow here
    // For now, just show a placeholder
    tiktokData.value =
      'OAuth flow not implemented. See TikTok API docs: https://developers.tiktok.com/doc/login-kit-web/'
  }
</script>
