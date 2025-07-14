export default defineEventHandler(() => {
  return {
    message: 'Hello from my module API!',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  }
})
