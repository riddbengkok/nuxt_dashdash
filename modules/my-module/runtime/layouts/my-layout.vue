<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Navigation Component -->
    <Navigation />

    <!-- Dashboard Drawer with Sidebar -->
    <DashboardDrawer>
      <!-- Main Content -->
      <main class="p-6">
        <slot />
      </main>
    </DashboardDrawer>
  </div>
</template>
