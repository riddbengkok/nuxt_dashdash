<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <Navigation />
    
    <!-- Main Content -->
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
// The Navigation component will be auto-imported by Nuxt
</script> 