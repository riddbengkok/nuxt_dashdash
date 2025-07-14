export const useTheme = () => {
  // Theme state
  const isDark = ref<boolean>(false)
  const isSystem = ref<boolean>(true)

  // Initialize theme from localStorage or system preference
  const initTheme = (): void => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme')
      const savedSystem = localStorage.getItem('system-theme')

      if (savedTheme) {
        isDark.value = savedTheme === 'dark'
        isSystem.value = savedSystem === 'true'
      } else {
        // Default to system preference
        isSystem.value = true
        isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      }

      applyTheme()
    }
  }

  // Apply theme to document
  const applyTheme = (): void => {
    if (process.client) {
      const html = document.documentElement
      const savedTheme = localStorage.getItem('theme')

      // Remove all theme classes first
      html.classList.remove('dark')
      html.removeAttribute('data-theme')

      if (savedTheme === 'sokle') {
        // Apply Sokle theme
        html.setAttribute('data-theme', 'sokle')
      } else if (savedTheme === 'dark') {
        // Apply dark theme
        html.classList.add('dark')
        html.setAttribute('data-theme', 'dark')
      } else {
        // Apply light theme
        html.setAttribute('data-theme', 'light')
      }
    }
  }

  // Toggle between light and dark
  const toggleTheme = (): void => {
    isDark.value = !isDark.value
    isSystem.value = false

    if (process.client) {
      const theme = isDark.value ? 'dark' : 'light'
      localStorage.setItem('theme', theme)
      localStorage.setItem('system-theme', 'false')
    }

    applyTheme()
  }

  // Set to system preference
  const setSystemTheme = (): void => {
    isSystem.value = true

    if (process.client) {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      isDark.value = prefersDark
      localStorage.setItem('system-theme', 'true')
      localStorage.removeItem('theme')
    }

    applyTheme()
  }

  // Set specific theme
  const setTheme = (theme: 'light' | 'dark' | 'sokle'): void => {
    isSystem.value = false
    if (theme === 'dark') {
      isDark.value = true
    } else {
      isDark.value = false
    }
    if (process.client) {
      localStorage.setItem('theme', theme)
      localStorage.setItem('system-theme', 'false')
    }
    applyTheme()
  }

  // Watch for system theme changes
  const watchSystemTheme = (): void => {
    if (process.client && isSystem.value) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (e: MediaQueryListEvent): void => {
        isDark.value = e.matches
        applyTheme()
      }

      mediaQuery.addEventListener('change', handleChange)

      // Cleanup on unmount
      onUnmounted(() => {
        mediaQuery.removeEventListener('change', handleChange)
      })
    }
  }

  // Initialize on mount
  onMounted(() => {
    initTheme()
    watchSystemTheme()
  })

  return {
    isDark: readonly(isDark),
    isSystem: readonly(isSystem),
    toggleTheme,
    setSystemTheme,
    setTheme,
  }
}
