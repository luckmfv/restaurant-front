export const useAuthStorage = () => {
  const authKey = 'authToken'

  const setAuthToken = (authToken: string): void => {
    localStorage.setItem(authKey, authToken)
  }

  const getAuthToken = (): string => {
    return localStorage.getItem(authKey)
  }

  const hasAuthToken = (): boolean => {
    return Boolean(getAuthToken())
  }

  return {
    setAuthToken,
    getAuthToken,
    hasAuthToken
  }
}