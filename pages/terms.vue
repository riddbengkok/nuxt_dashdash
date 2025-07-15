<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4"
  >
    <div
      class="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
    >
      <h1
        class="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 text-center"
      >
        Terms of Service
      </h1>
      <div class="prose prose-gray dark:prose-invert max-w-none">
        <p class="text-sm text-gray-500 dark:text-gray-400 text-right mb-8">
          Last updated: July 14, 2025
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using this dashboard, you accept and agree to be
          bound by the terms and provision of this agreement. If you do not
          agree to abide by the above, please do not use this service.
        </p>

        <h2>2. Modifications to Service</h2>
        <p>
          We reserve the right to modify or discontinue, temporarily or
          permanently, the service (or any part thereof) with or without notice.
        </p>

        <h2>3. User Responsibilities</h2>
        <ul>
          <li>
            You are responsible for maintaining the confidentiality of your
            account and password.
          </li>
          <li>
            You agree to provide accurate and complete information when creating
            an account.
          </li>
          <li>
            You agree not to use the service for any unlawful or prohibited
            activities.
          </li>
        </ul>

        <h2>4. Privacy</h2>
        <p>
          Your use of the service is also governed by our
          <NuxtLink
            to="/privacy"
            class="text-blue-600 dark:text-blue-400 underline"
            >Privacy Policy</NuxtLink
          >.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          In no event shall we be liable for any indirect, incidental, special,
          consequential or punitive damages arising out of your use of the
          service.
        </p>

        <h2>6. Governing Law</h2>
        <p>
          These terms shall be governed in accordance with the laws of your
          jurisdiction, without regard to its conflict of law provisions.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us at
          <a
            href="mailto:support@example.com"
            class="text-blue-600 dark:text-blue-400 underline"
            >support@example.com</a
          >.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'auth',
    auth: false,
  })
</script>
