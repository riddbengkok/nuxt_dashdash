export default defineNuxtPlugin(() => {
  // Only run in development or when ANALYZE is true
  if (
    process.env.NODE_ENV === 'development' ||
    process.env.ANALYZE === 'true'
  ) {
    console.log('🔍 Bundle Analysis Mode Enabled')
    console.log('📊 To analyze your bundle:')
    console.log('1. Run: pnpm run analyze')
    console.log('2. Check the terminal output for bundle size information')
    console.log('3. Look for large dependencies that can be optimized')
  }
})
