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
        Privacy Policy
      </h1>
      <div class="prose prose-gray dark:prose-invert max-w-none">
        <p class="text-sm text-gray-500 dark:text-gray-400 text-right mb-8">
          Last updated: July 14, 2025
        </p>

        <h2>1. Introduction</h2>
        <p>
          We value your privacy and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, and
          safeguard your data when you use our dashboard.
        </p>

        <h2>2. Information We Collect</h2>
        <ul>
          <li>
            Account information (such as your name, email address, and profile
            photo)
          </li>
          <li>
            Usage data (such as pages visited, features used, and access times)
          </li>
          <li>Device and browser information</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To provide and maintain our service</li>
          <li>To improve and personalize your experience</li>
          <li>To communicate with you about updates or support</li>
          <li>To ensure security and prevent fraud</li>
        </ul>

        <h2>4. Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal information. We may share your
          data with trusted third-party service providers only as necessary to
          operate our service, comply with the law, or protect our rights.
        </p>

        <h2>5. Cookies and Tracking</h2>
        <p>
          We use cookies and similar technologies to enhance your experience and
          analyze usage. You can control cookies through your browser settings.
        </p>

        <h2>6. Data Security</h2>
        <p>
          We implement reasonable security measures to protect your data.
          However, no method of transmission over the Internet is 100% secure.
        </p>

        <h2>7. Your Rights</h2>
        <p>
          You may access, update, or delete your personal information at any
          time by contacting us.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new policy on this page.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at
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
