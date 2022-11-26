import { createRouter, createWebHistory } from 'vue-router'
import { routes as authRoutes } from '@/modules/auth/router'
import { routes as homeRoutes } from '@/modules/home/router'


export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...authRoutes, ...homeRoutes]
})
