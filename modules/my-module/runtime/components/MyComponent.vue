<template>
  <div class="my-module-component">
    <h3>My Module Component</h3>
    <p>This is a component from my custom module!</p>
    <button @click="count++" class="btn btn-primary">Count: {{ count }}</button>
  </div>
</template>

<script setup>
  const count = ref(0)
</script>

<style scoped>
  .my-module-component {
    padding: 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 0.5rem;
    background-color: #f9fafb;
  }
</style>
