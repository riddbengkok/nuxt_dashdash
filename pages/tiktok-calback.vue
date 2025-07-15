<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4"
  >
    <div
      class="w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
    >
      <h1
        class="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center"
      >
        TikTok Callback
      </h1>
      <div v-if="code" class="alert alert-success mb-4">
        <span>Authorization code received!</span>
      </div>
      <div v-if="error" class="alert alert-error mb-4">
        <span>{{ error }}</span>
      </div>
      <div class="prose dark:prose-invert max-w-none">
        <p v-if="code">
          <strong>Code:</strong> <span class="break-all">{{ code }}</span>
        </p>
        <p v-else-if="error"><strong>Error:</strong> {{ error }}</p>
        <p v-else>Waiting for TikTok response...</p>
      </div>
      <div class="mt-6 text-center">
        <NuxtLink to="/tiktok" class="btn btn-secondary"
          >Back to TikTok Connect</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
  const route = useRoute()
  const code = computed(() => route.query.code)
  const error = computed(
    () => route.query.error_description || route.query.error
  )
</script>
