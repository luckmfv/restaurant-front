import type { RouteRecordRaw } from 'vue-router'
import { HomePage } from '@/modules/home/pages'
import { Layout } from '@/layouts/enums'

export const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'home.home',
    component: HomePage,
    meta: {
      layout: Layout.PRIVATE,
      requireAuth: true
    }
  }
]