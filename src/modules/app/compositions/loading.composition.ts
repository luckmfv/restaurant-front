import { ref } from 'vue'

const isLoading = ref(false)

export const useLoading = () => {
  const startLoading = (): void => {
    isLoading.value = true
  }

  const stopLoading = (): void => {
    isLoading.value = false
  }

  return [isLoading, startLoading, stopLoading]
}