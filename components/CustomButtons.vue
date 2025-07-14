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
              class="w-8 h-8 bg-[#F38181] rounded-full border-2 border-gray-300"
            ></div>
            <span class="text-sm text-gray-600 dark:text-gray-400"
              >#F38181 - Coral Pink</span
            >
          </div>
          <div class="flex items-center space-x-2">
            <div
              class="w-8 h-8 bg-[#FCE38A] rounded-full border-2 border-gray-300"
            ></div>
            <span class="text-sm text-gray-600 dark:text-gray-400"
              >#FCE38A - Warm Yellow</span
            >
          </div>
          <div class="flex items-center space-x-2">
            <div
              class="w-8 h-8 bg-[#EAFFD0] rounded-full border-2 border-gray-300"
            ></div>
            <span class="text-sm text-gray-600 dark:text-gray-400"
              >#EAFFD0 - Mint Green</span
            >
          </div>
          <div class="flex items-center space-x-2">
            <div
              class="w-8 h-8 bg-[#95E1D3] rounded-full border-2 border-gray-300"
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
            class="btn bg-[#F38181] hover:bg-[#e06d6d] border-[#F38181] text-white"
          >
            Primary
          </button>
          <button
            class="btn btn-outline border-[#F38181] text-[#F38181] hover:bg-[#F38181] hover:text-white"
          >
            Primary Outline
          </button>
          <button class="btn btn-ghost text-[#F38181] hover:bg-[#F38181]/10">
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
            class="btn bg-[#FCE38A] hover:bg-[#f8d56a] border-[#FCE38A] text-gray-800"
          >
            Secondary
          </button>
          <button
            class="btn btn-outline border-[#FCE38A] text-[#FCE38A] hover:bg-[#FCE38A] hover:text-gray-800"
          >
            Secondary Outline
          </button>
          <button class="btn btn-ghost text-[#FCE38A] hover:bg-[#FCE38A]/10">
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
            class="btn bg-[#EAFFD0] hover:bg-[#d4f0b0] border-[#EAFFD0] text-gray-800"
          >
            Success
          </button>
          <button
            class="btn btn-outline border-[#EAFFD0] text-[#EAFFD0] hover:bg-[#EAFFD0] hover:text-gray-800"
          >
            Success Outline
          </button>
          <button class="btn btn-ghost text-[#EAFFD0] hover:bg-[#EAFFD0]/10">
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
            class="btn bg-[#95E1D3] hover:bg-[#7dd1c3] border-[#95E1D3] text-white"
          >
            Info
          </button>
          <button
            class="btn btn-outline border-[#95E1D3] text-[#95E1D3] hover:bg-[#95E1D3] hover:text-white"
          >
            Info Outline
          </button>
          <button class="btn btn-ghost text-[#95E1D3] hover:bg-[#95E1D3]/10">
            Info Ghost
          </button>
        </div>
      </section>

      <!-- Button Sizes -->
      <section>
        <h2 class="card-title text-black dark:text-white mb-4">Button Sizes</h2>
        <div class="flex flex-wrap gap-4 items-center">
          <button
            class="btn btn-sm bg-[#F38181] hover:bg-[#e06d6d] border-[#F38181] text-white"
          >
            Small
          </button>
          <button
            class="btn bg-[#FCE38A] hover:bg-[#f8d56a] border-[#FCE38A] text-gray-800"
          >
            Medium
          </button>
          <button
            class="btn btn-lg bg-[#EAFFD0] hover:bg-[#d4f0b0] border-[#EAFFD0] text-gray-800"
          >
            Large
          </button>
          <button
            class="btn btn-xl bg-[#95E1D3] hover:bg-[#7dd1c3] border-[#95E1D3] text-white"
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
              class="btn bg-[#F38181] hover:bg-[#e06d6d] border-[#F38181] text-white"
            >
              Click me!
            </button>
            <button
              @click="handleClick"
              class="btn btn-outline border-[#FCE38A] text-[#FCE38A] hover:bg-[#FCE38A] hover:text-gray-800"
            >
              Hover me!
            </button>
            <button
              @click="handleClick"
              class="btn btn-ghost text-[#EAFFD0] hover:bg-[#EAFFD0]/10"
            >
              Ghost!
            </button>
          </div>
          <div class="w-full">
            <button
              @click="handleClick"
              class="btn w-full bg-[#95E1D3] hover:bg-[#7dd1c3] border-[#95E1D3] text-white"
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
        <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <pre
            class="text-sm text-gray-800 dark:text-gray-200"
          ><code>&lt;!-- Primary button (Coral Pink) --&gt;
&lt;button class="btn bg-[#F38181] hover:bg-[#e06d6d] border-[#F38181] text-white"&gt;
  Primary Action
&lt;/button&gt;

&lt;!-- Secondary button (Warm Yellow) --&gt;
&lt;button class="btn bg-[#FCE38A] hover:bg-[#f8d56a] border-[#FCE38A] text-gray-800"&gt;
  Secondary Action
&lt;/button&gt;

&lt;!-- Success button (Mint Green) --&gt;
&lt;button class="btn bg-[#EAFFD0] hover:bg-[#d4f0b0] border-[#EAFFD0] text-gray-800"&gt;
  Success Action
&lt;/button&gt;

&lt;!-- Info button (Teal Blue) --&gt;
&lt;button class="btn bg-[#95E1D3] hover:bg-[#7dd1c3] border-[#95E1D3] text-white"&gt;
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
