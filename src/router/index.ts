import { Layout } from '@/layouts/enums'
import { createRouter, createWebHistory } from 'vue-router'
import { LoginPage } from '@/modules/onboarding/pages'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: {
        layout: Layout.PRIVATE
      }
    }
  ]
})

export default router
