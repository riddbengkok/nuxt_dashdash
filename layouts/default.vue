<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Dashboard Drawer with Sidebar (includes navigation) -->
    <DashboardDrawer>
      <!-- Main Content -->
      <main class="p-6">
        <slot />
      </main>
    </DashboardDrawer>
  </div>
</template>

<script setup>
  // The DashboardDrawer component will be auto-imported by Nuxt
</script>
