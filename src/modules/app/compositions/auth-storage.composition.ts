import { computed } from 'vue'

export const useAuthStorage = () => {
  const authKey = 'authToken'

  const setAuthToken = (authToken: string): void => {
    localStorage.setItem(authKey, authToken)
  }

  const getAuthToken = (): string => {
    return localStorage.getItem(authKey)
  }

  const removeAuthToken = (): void => {
    localStorage.removeItem(authKey)
  }

  const hasAuthToken = computed((): boolean => {
    return Boolean(getAuthToken())
  })

  return {
    removeAuthToken,
    setAuthToken,
    getAuthToken,
    hasAuthToken
  }
}