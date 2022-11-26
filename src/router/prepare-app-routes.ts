import { useAuthStorage } from '@/modules/app/compositions'
import type { Router } from 'vue-router'

const { hasAuthToken } = useAuthStorage()

export const prepareAppRoutes = (router: Router): void => {
  router.beforeEach((to, _from, next) => {
    if (to.meta.requireAuth) {
      hasAuthToken.value ? next() : next({ name: 'auth.login' })
    }
  })
}