<template>
  <div class="card bg-white dark:bg-gray-800 shadow">
    <div class="card-body">
      <h1 class="card-title text-black dark:text-white mb-4">UI Kit: Table</h1>
      <p class="text-gray-600 dark:text-gray-400 mb-4">
        Example of a powerful table component with online data, fast filter,
        advanced filter, and pagination.
      </p>

      <!-- Filters -->
      <div class="flex flex-wrap gap-4 mb-4 items-end">
        <div>
          <label class="label-text text-gray-900 dark:text-white mb-1 block"
            >Search</label
          >
          <input
            v-model="search"
            type="text"
            placeholder="Search title or body..."
            class="input input-bordered bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
          />
        </div>
        <div>
          <label class="label-text text-gray-900 dark:text-white mb-1 block"
            >User ID</label
          >
          <select
            v-model="userIdFilter"
            class="select select-bordered bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
          >
            <option value="">All</option>
            <option v-for="id in userIds" :key="id" :value="id">
              User {{ id }}
            </option>
          </select>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th class="text-gray-900 dark:text-white">Title</th>
              <th class="text-gray-900 dark:text-white">Body</th>
              <th class="text-gray-900 dark:text-white">User ID</th>
              <th class="text-gray-900 dark:text-white">Post ID</th>
              <th class="text-gray-900 dark:text-white">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="post in paginatedPosts"
              :key="post.id"
              class="hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <td
                class="text-gray-900 dark:text-white max-w-xs truncate"
                :title="post.title"
              >
                {{ post.title }}
              </td>
              <td
                class="text-gray-900 dark:text-white max-w-xs truncate"
                :title="post.body"
              >
                {{ post.body }}
              </td>
              <td class="text-gray-900 dark:text-white">{{ post.userId }}</td>
              <td class="text-gray-900 dark:text-white">{{ post.id }}</td>
              <td>
                <button class="btn btn-ghost btn-xs">View</button>
              </td>
            </tr>
            <tr v-if="paginatedPosts.length === 0">
              <td
                colspan="5"
                class="text-center text-gray-500 dark:text-gray-400 py-6"
              >
                No posts found.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="flex justify-between items-center mt-4">
        <div class="text-sm text-gray-600 dark:text-gray-400">
          Showing {{ startIdx + 1 }}-{{ endIdx }} of
          {{ filteredPosts.length }} posts
        </div>
        <div class="join">
          <button
            class="join-item btn btn-sm"
            :disabled="page === 1"
            @click="page--"
          >
            Prev
          </button>
          <button class="join-item btn btn-sm" disabled>Page {{ page }}</button>
          <button
            class="join-item btn btn-sm"
            :disabled="endIdx >= filteredPosts.length"
            @click="page++"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  // Fetch posts from JSONPlaceholder
  const { data } = await useFetch('https://jsonplaceholder.typicode.com/posts')

  // Posts data
  const postsRaw = computed(() => data.value || [])

  // Unique userIds for filter
  const userIds = computed(() => {
    const ids = new Set(postsRaw.value.map(p => p.userId))
    return Array.from(ids).sort((a, b) => a - b)
  })

  // Filters
  const search = ref('')
  const userIdFilter = ref('')

  // Pagination
  const page = ref(1)
  const pageSize = 10

  // Filtered posts
  const filteredPosts = computed(() => {
    let posts = postsRaw.value
    if (search.value) {
      const s = search.value.toLowerCase()
      posts = posts.filter(
        p =>
          p.title.toLowerCase().includes(s) || p.body.toLowerCase().includes(s)
      )
    }
    if (userIdFilter.value) {
      posts = posts.filter(p => String(p.userId) === String(userIdFilter.value))
    }
    return posts
  })

  const startIdx = computed(() => (page.value - 1) * pageSize)
  const endIdx = computed(() =>
    Math.min(page.value * pageSize, filteredPosts.value.length)
  )
  const paginatedPosts = computed(() =>
    filteredPosts.value.slice(startIdx.value, endIdx.value)
  )

  // Reset page if filters change
  watch([search, userIdFilter], () => {
    page.value = 1
  })
</script>
