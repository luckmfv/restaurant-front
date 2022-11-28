import { ref, type Ref } from 'vue'

const isLoading = ref(false)

export const useLoading = (): [Ref<boolean>, () => void, () => void] => {
  const startLoading = (): void => {
    isLoading.value = true
  }

  const stopLoading = (): void => {
    isLoading.value = false
  }

  return [isLoading, startLoading, stopLoading]
}