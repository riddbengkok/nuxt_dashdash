export const useMyComposable = () => {
  const message = ref('Hello from my module composable!')
  const count = ref(0)

  const increment = () => {
    count.value++
  }

  const decrement = () => {
    count.value--
  }

  return {
    message: readonly(message),
    count: readonly(count),
    increment,
    decrement,
  }
}
