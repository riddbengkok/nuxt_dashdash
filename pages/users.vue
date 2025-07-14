<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="card bg-white dark:bg-gray-800 shadow">
      <div class="card-body">
        <h1 class="card-title text-black dark:text-white">Users Management</h1>
        <p class="text-gray-600 dark:text-gray-400">
          Manage your application users and their permissions.
        </p>
      </div>
    </div>

    <!-- User Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="card bg-white dark:bg-gray-800 shadow">
        <div class="card-body">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                1,234
              </h3>
              <p class="text-gray-600 dark:text-gray-400">Total Users</p>
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
                89
              </h3>
              <p class="text-gray-600 dark:text-gray-400">Active Today</p>
            </div>
            <div class="text-green-500">
              <UserIcon class="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-white dark:bg-gray-800 shadow">
        <div class="card-body">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                12
              </h3>
              <p class="text-gray-600 dark:text-gray-400">New This Week</p>
            </div>
            <div class="text-purple-500">
              <UserPlusIcon class="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Users Table -->
    <div class="card bg-white dark:bg-gray-800 shadow">
      <div class="card-body">
        <h3 class="card-title text-black dark:text-white mb-4">Recent Users</h3>
        <div class="overflow-x-auto">
          <table class="table table-zebra">
            <thead>
              <tr>
                <th class="text-gray-900 dark:text-white">User</th>
                <th class="text-gray-900 dark:text-white">Email</th>
                <th class="text-gray-900 dark:text-white">Status</th>
                <th class="text-gray-900 dark:text-white">Joined</th>
                <th class="text-gray-900 dark:text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold text-gray-900 dark:text-white">
                        John Doe
                      </div>
                      <div
                        class="text-sm opacity-50 text-gray-600 dark:text-gray-400"
                      >
                        ID: 12345
                      </div>
                    </div>
                  </div>
                </td>
                <td class="text-gray-900 dark:text-white">john@example.com</td>
                <td>
                  <div class="badge badge-success gap-2">
                    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                    Active
                  </div>
                </td>
                <td class="text-gray-900 dark:text-white">2024-01-15</td>
                <td>
                  <button class="btn btn-ghost btn-xs">View</button>
                </td>
              </tr>
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold text-gray-900 dark:text-white">
                        Jane Smith
                      </div>
                      <div
                        class="text-sm opacity-50 text-gray-600 dark:text-gray-400"
                      >
                        ID: 12346
                      </div>
                    </div>
                  </div>
                </td>
                <td class="text-gray-900 dark:text-white">jane@example.com</td>
                <td>
                  <div class="badge badge-warning gap-2">
                    <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    Pending
                  </div>
                </td>
                <td class="text-gray-900 dark:text-white">2024-01-14</td>
                <td>
                  <button class="btn btn-ghost btn-xs">View</button>
                </td>
              </tr>
              <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold text-gray-900 dark:text-white">
                        Bob Johnson
                      </div>
                      <div
                        class="text-sm opacity-50 text-gray-600 dark:text-gray-400"
                      >
                        ID: 12347
                      </div>
                    </div>
                  </div>
                </td>
                <td class="text-gray-900 dark:text-white">bob@example.com</td>
                <td>
                  <div class="badge badge-error gap-2">
                    <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                    Inactive
                  </div>
                </td>
                <td class="text-gray-900 dark:text-white">2024-01-13</td>
                <td>
                  <button class="btn btn-ghost btn-xs">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Add User Button -->
    <div class="flex justify-end">
      <button class="btn btn-primary">
        <UserPlusIcon class="h-4 w-4 mr-2" />
        Add New User
      </button>
    </div>
  </div>
</template>

<script setup>
  import { UserIcon, UserPlusIcon, UsersIcon } from '@heroicons/vue/24/outline'

  // Set page meta
  definePageMeta({
    layout: 'default',
  })

  // Set page title
  useHead({
    title: 'Users - Dashboard',
  })
</script>
