<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="card bg-white dark:bg-gray-800 shadow">
      <div class="card-body">
        <h1 class="card-title text-black dark:text-white">
          Analytics Dashboard
        </h1>
        <p class="text-gray-600 dark:text-gray-400">
          View your application analytics and metrics.
        </p>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="card bg-white dark:bg-gray-800 shadow">
        <div class="card-body">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                1,234
              </h3>
              <p class="text-gray-600 dark:text-gray-400">Total Users</p>
            </div>
            <div class="text-green-500">
              <ChartBarIcon class="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-white dark:bg-gray-800 shadow">
        <div class="card-body">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                567
              </h3>
              <p class="text-gray-600 dark:text-gray-400">Active Sessions</p>
            </div>
            <div class="text-blue-500">
              <UsersIcon class="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-white dark:bg-gray-800 shadow">
        <div class="card-body">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                89%
              </h3>
              <p class="text-gray-600 dark:text-gray-400">Uptime</p>
            </div>
            <div class="text-yellow-500">
              <Cog6ToothIcon class="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-white dark:bg-gray-800 shadow">
        <div class="card-body">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                2.3s
              </h3>
              <p class="text-gray-600 dark:text-gray-400">Avg Response</p>
            </div>
            <div class="text-purple-500">
              <FireIcon class="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Chart Placeholder -->
    <div class="card bg-white dark:bg-gray-800 shadow">
      <div class="card-body">
        <h3 class="card-title text-black dark:text-white mb-4">
          Traffic Overview
        </h3>
        <div
          class="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center"
        >
          <div class="text-center">
            <ChartBarIcon class="h-12 w-12 text-gray-400 mx-auto mb-2" />
            <p class="text-gray-500 dark:text-gray-400">
              Chart will be displayed here
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="card bg-white dark:bg-gray-800 shadow">
      <div class="card-body">
        <h3 class="card-title text-black dark:text-white mb-4">
          Recent Activity
        </h3>
        <div class="space-y-4">
          <div
            class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                New user registered
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                2 minutes ago
              </p>
            </div>
          </div>
          <div
            class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                System backup completed
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                15 minutes ago
              </p>
            </div>
          </div>
          <div
            class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div class="flex-1">
              <p class="text-sm font-medium text-gray-900 dark:text-white">
                Performance alert
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">1 hour ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    ChartBarIcon,
    Cog6ToothIcon,
    FireIcon,
    UsersIcon,
  } from '@heroicons/vue/24/outline'

  // Set page meta
  definePageMeta({
    layout: 'default',
  })

  // Set page title
  useHead({
    title: 'Analytics - Dashboard',
  })
</script>
