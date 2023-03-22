import { useAuthStorage } from '@/modules/app/compositions'
import { router } from '@/router'
import type { Axios } from 'axios'

export const authorizationInterceptor = (a: Axios) => {
  const { getAuthToken, removeAuthToken } = useAuthStorage()
  a.interceptors.request.use((request) => {
    const authorization = getAuthToken()

    if (authorization) {
      request.headers.authorization = authorization
    }

    return request
  })

  a.interceptors.response.use((response) => {
    if (response.status === 401) {
      removeAuthToken()
      router.push({ name: 'auth.login' })
    }

    return response
  })
}
