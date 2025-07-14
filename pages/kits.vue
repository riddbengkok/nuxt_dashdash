<template>
  <div class="space-y-8">
    <!-- Table Section -->
    <UiKitTable />

    <!-- Buttons Section -->
    <UiKitButtons />

    <!-- Custom Color Buttons Section -->
    <UiKitCustomButtons />
  </div>
</template>

<script setup>
  import UiKitButtons from '~/components/UiKitButtons.vue'
  import UiKitCustomButtons from '~/components/UiKitCustomButtons.vue'
  import UiKitTable from '~/components/UiKitTable.vue'

  // Set page meta
  definePageMeta({
    layout: 'default',
  })

  useHead({
    title: 'UI Kit - Components',
  })
</script>
