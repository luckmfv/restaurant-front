import { useAuthStorage } from '@/modules/app/compositions'
import type { Router } from 'vue-router'

const { verifyIfHasAuthToken } = useAuthStorage()

export const prepareAppRoutes = (router: Router): void => {
  router.beforeEach((to, _from, next) => {
    if (to.meta.requireAuth && !verifyIfHasAuthToken()) {
      next({ name: 'auth.login' })
    }

    next()
  })
}