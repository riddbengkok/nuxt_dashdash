<template>
  <div class="card bg-white dark:bg-gray-800 shadow">
    <div class="card-body space-y-8">
      <h1 class="card-title text-black dark:text-white">UI Kit: Buttons</h1>
      <p class="text-gray-600 dark:text-gray-400">
        Explore all button types, colors, and sizes used in this project.
      </p>

      <!-- Button Types -->
      <section>
        <h2 class="card-title text-black dark:text-white mb-4">Button Types</h2>
        <div class="flex flex-wrap gap-4">
          <button class="btn btn-primary">Primary</button>
          <button class="btn btn-secondary">Secondary</button>
          <button class="btn btn-accent">Accent</button>
          <button class="btn btn-info">Info</button>
          <button class="btn btn-success">Success</button>
          <button class="btn btn-warning">Warning</button>
          <button class="btn btn-error">Error</button>
        </div>
      </section>

      <!-- Outline Buttons -->
      <section>
        <h2 class="card-title text-black dark:text-white mb-4">
          Outline Buttons
        </h2>
        <div class="flex flex-wrap gap-4">
          <button class="btn btn-outline btn-primary">Primary</button>
          <button class="btn btn-outline btn-secondary">Secondary</button>
          <button class="btn btn-outline btn-accent">Accent</button>
          <button class="btn btn-outline btn-info">Info</button>
          <button class="btn btn-outline btn-success">Success</button>
          <button class="btn btn-outline btn-warning">Warning</button>
          <button class="btn btn-outline btn-error">Error</button>
        </div>
      </section>

      <!-- Ghost & Link Buttons -->
      <section>
        <h2 class="card-title text-black dark:text-white mb-4">
          Ghost & Link Buttons
        </h2>
        <div class="flex flex-wrap gap-4">
          <button class="btn btn-ghost">Ghost</button>
          <button class="btn btn-link">Link</button>
        </div>
      </section>

      <!-- Button Sizes -->
      <section>
        <h2 class="card-title text-black dark:text-white mb-4">Button Sizes</h2>
        <div class="flex flex-wrap gap-4 items-center">
          <button class="btn btn-primary btn-xs">XS</button>
          <button class="btn btn-primary btn-sm">SM</button>
          <button class="btn btn-primary">MD</button>
          <button class="btn btn-primary btn-lg">LG</button>
        </div>
      </section>

      <!-- Disabled Buttons -->
      <section>
        <h2 class="card-title text-black dark:text-white mb-4">
          Disabled Buttons
        </h2>
        <div class="flex flex-wrap gap-4">
          <button class="btn btn-primary" disabled>Primary</button>
          <button class="btn btn-outline btn-secondary" disabled>
            Secondary
          </button>
          <button class="btn btn-accent" disabled>Accent</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
  // No script logic needed for static button showcase
</script>
