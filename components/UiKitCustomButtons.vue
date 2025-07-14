<template>
  <div class="card bg-white dark:bg-gray-800 shadow">
    <div class="card-body space-y-8">
      <h1 class="card-title text-black dark:text-white">
        Custom Color Buttons
      </h1>
      <p class="text-gray-600 dark:text-gray-400">
        Semantic buttons using your custom color palette: #F38181 (Coral Pink),
        #FCE38A (Warm Yellow), #EAFFD0 (Mint Green), #95E1D3 (Teal Blue)
      </p>

      <!-- Color Palette Display -->
      <section>
        <h2 class="card-title text-black dark:text-white mb-4">
          Color Palette
        </h2>
        <div class="flex flex-wrap gap-4">
          <div class="flex items-center space-x-2">
            <div
              class="w-8 h-8 bg-[#F38181] rounded-full border-2 border-gray-300 dark:border-gray-600"
            ></div>
            <span class="text-sm text-gray-600 dark:text-gray-400"
              >#F38181 - Coral Pink</span
            >
          </div>
          <div class="flex items-center space-x-2">
            <div
              class="w-8 h-8 bg-[#FCE38A] rounded-full border-2 border-gray-300 dark:border-gray-600"
            ></div>
            <span class="text-sm text-gray-600 dark:text-gray-400"
              >#FCE38A - Warm Yellow</span
            >
          </div>
          <div class="flex items-center space-x-2">
            <div
              class="w-8 h-8 bg-[#EAFFD0] rounded-full border-2 border-gray-300 dark:border-gray-600"
            ></div>
            <span class="text-sm text-gray-600 dark:text-gray-400"
              >#EAFFD0 - Mint Green</span
            >
          </div>
          <div class="flex items-center space-x-2">
            <div
              class="w-8 h-8 bg-[#95E1D3] rounded-full border-2 border-gray-300 dark:border-gray-600"
            ></div>
            <span class="text-sm text-gray-600 dark:text-gray-400"
              >#95E1D3 - Teal Blue</span
            >
          </div>
        </div>
      </section>

      <!-- Primary Buttons (Coral Pink) -->
      <section>
        <h2 class="card-title text-black dark:text-white mb-4">
          Primary Buttons (Coral Pink)
        </h2>
        <div class="flex flex-wrap gap-4">
          <button
            class="btn bg-[#F38181] hover:bg-[#e06d6d] border-[#F38181] text-white dark:text-white shadow-md hover:shadow-lg transition-all duration-200"
          >
            Primary
          </button>
          <button
            class="btn btn-outline border-[#F38181] text-[#F38181] dark:text-[#F38181] hover:bg-[#F38181] hover:text-white dark:hover:text-white dark:border-[#F38181]"
          >
            Primary Outline
          </button>
          <button
            class="btn btn-ghost text-[#F38181] dark:text-[#F38181] hover:bg-[#F38181]/10 dark:hover:bg-[#F38181]/20"
          >
            Primary Ghost
          </button>
        </div>
      </section>

      <!-- Secondary Buttons (Warm Yellow) -->
      <section>
        <h2 class="card-title text-black dark:text-white mb-4">
          Secondary Buttons (Warm Yellow)
        </h2>
        <div class="flex flex-wrap gap-4">
          <button
            class="btn bg-[#FCE38A] hover:bg-[#f8d56a] border-[#FCE38A] text-gray-900 dark:text-gray-900 shadow-md hover:shadow-lg transition-all duration-200"
          >
            Secondary
          </button>
          <button
            class="btn btn-outline border-[#FCE38A] text-gray-700 dark:text-[#FCE38A] hover:bg-[#FCE38A] hover:text-gray-900 dark:hover:text-gray-900 dark:border-[#FCE38A]"
          >
            Secondary Outline
          </button>
          <button
            class="btn btn-ghost text-gray-700 dark:text-[#FCE38A] hover:bg-[#FCE38A]/10 dark:hover:bg-[#FCE38A]/20"
          >
            Secondary Ghost
          </button>
        </div>
      </section>

      <!-- Success Buttons (Mint Green) -->
      <section>
        <h2 class="card-title text-black dark:text-white mb-4">
          Success Buttons (Mint Green)
        </h2>
        <div class="flex flex-wrap gap-4">
          <button
            class="btn bg-[#EAFFD0] hover:bg-[#d4f0b0] border-[#EAFFD0] text-gray-900 dark:text-gray-900 shadow-md hover:shadow-lg transition-all duration-200"
          >
            Success
          </button>
          <button
            class="btn btn-outline border-[#EAFFD0] text-gray-700 dark:text-[#EAFFD0] hover:bg-[#EAFFD0] hover:text-gray-900 dark:hover:text-gray-900 dark:border-[#EAFFD0]"
          >
            Success Outline
          </button>
          <button
            class="btn btn-ghost text-gray-700 dark:text-[#EAFFD0] hover:bg-[#EAFFD0]/10 dark:hover:bg-[#EAFFD0]/20"
          >
            Success Ghost
          </button>
        </div>
      </section>

      <!-- Info Buttons (Teal Blue) -->
      <section>
        <h2 class="card-title text-black dark:text-white mb-4">
          Info Buttons (Teal Blue)
        </h2>
        <div class="flex flex-wrap gap-4">
          <button
            class="btn bg-[#95E1D3] hover:bg-[#7dd1c3] border-[#95E1D3] text-white dark:text-white shadow-md hover:shadow-lg transition-all duration-200"
          >
            Info
          </button>
          <button
            class="btn btn-outline border-[#95E1D3] text-gray-700 dark:text-[#95E1D3] hover:bg-[#95E1D3] hover:text-white dark:hover:text-white dark:border-[#95E1D3]"
          >
            Info Outline
          </button>
          <button
            class="btn btn-ghost text-gray-700 dark:text-[#95E1D3] hover:bg-[#95E1D3]/10 dark:hover:bg-[#95E1D3]/20"
          >
            Info Ghost
          </button>
        </div>
      </section>

      <!-- Button Sizes -->
      <section>
        <h2 class="card-title text-black dark:text-white mb-4">Button Sizes</h2>
        <div class="flex flex-wrap gap-4 items-center">
          <button
            class="btn btn-sm bg-[#F38181] hover:bg-[#e06d6d] border-[#F38181] text-white dark:text-white shadow-md hover:shadow-lg transition-all duration-200"
          >
            Small
          </button>
          <button
            class="btn bg-[#FCE38A] hover:bg-[#f8d56a] border-[#FCE38A] text-gray-900 dark:text-gray-900 shadow-md hover:shadow-lg transition-all duration-200"
          >
            Medium
          </button>
          <button
            class="btn btn-lg bg-[#EAFFD0] hover:bg-[#d4f0b0] border-[#EAFFD0] text-gray-900 dark:text-gray-900 shadow-md hover:shadow-lg transition-all duration-200"
          >
            Large
          </button>
          <button
            class="btn btn-xl bg-[#95E1D3] hover:bg-[#7dd1c3] border-[#95E1D3] text-white dark:text-white shadow-md hover:shadow-lg transition-all duration-200"
          >
            Extra Large
          </button>
        </div>
      </section>

      <!-- Interactive Demo -->
      <section>
        <h2 class="card-title text-black dark:text-white mb-4">
          Interactive Demo
        </h2>
        <div class="space-y-4">
          <div class="flex flex-wrap gap-4">
            <button
              @click="handleClick"
              class="btn bg-[#F38181] hover:bg-[#e06d6d] border-[#F38181] text-white dark:text-white shadow-md hover:shadow-lg transition-all duration-200"
            >
              Click me!
            </button>
            <button
              @click="handleClick"
              class="btn btn-outline border-[#FCE38A] text-gray-700 dark:text-[#FCE38A] hover:bg-[#FCE38A] hover:text-gray-900 dark:hover:text-gray-900 dark:border-[#FCE38A]"
            >
              Hover me!
            </button>
            <button
              @click="handleClick"
              class="btn btn-ghost text-gray-700 dark:text-[#EAFFD0] hover:bg-[#EAFFD0]/10 dark:hover:bg-[#EAFFD0]/20"
            >
              Ghost!
            </button>
          </div>
          <div class="w-full">
            <button
              @click="handleClick"
              class="btn w-full bg-[#95E1D3] hover:bg-[#7dd1c3] border-[#95E1D3] text-white dark:text-white shadow-md hover:shadow-lg transition-all duration-200"
            >
              Full Width Button
            </button>
          </div>
        </div>
      </section>

      <!-- Usage Examples -->
      <section>
        <h2 class="card-title text-black dark:text-white mb-4">
          Usage Examples
        </h2>
        <div
          class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg overflow-x-auto"
        >
          <pre
            class="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-wrap break-words"
          ><code>&lt;!-- Primary button (Coral Pink) --&gt;
&lt;button class="btn bg-[#F38181] hover:bg-[#e06d6d] border-[#F38181] text-white dark:text-white shadow-md hover:shadow-lg transition-all duration-200"&gt;
  Primary Action
&lt;/button&gt;

&lt;!-- Secondary button (Warm Yellow) --&gt;
&lt;button class="btn bg-[#FCE38A] hover:bg-[#f8d56a] border-[#FCE38A] text-gray-900 dark:text-gray-900 shadow-md hover:shadow-lg transition-all duration-200"&gt;
  Secondary Action
&lt;/button&gt;

&lt;!-- Success button (Mint Green) --&gt;
&lt;button class="btn bg-[#EAFFD0] hover:bg-[#d4f0b0] border-[#EAFFD0] text-gray-900 dark:text-gray-900 shadow-md hover:shadow-lg transition-all duration-200"&gt;
  Success Action
&lt;/button&gt;

&lt;!-- Info button (Teal Blue) --&gt;
&lt;button class="btn bg-[#95E1D3] hover:bg-[#7dd1c3] border-[#95E1D3] text-white dark:text-white shadow-md hover:shadow-lg transition-all duration-200"&gt;
  Info Action
&lt;/button&gt;</code></pre>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
  const handleClick = event => {
    console.log('Custom button clicked!', event)
    // You can add any custom logic here
  }
</script>
