import type { RouteRecordRaw } from 'vue-router'
import { Layout } from '@/layouts/enums'

export const routes: RouteRecordRaw[] = [
  {
    path: '',
    name: 'home.home',
    redirect: { name: 'auth.login' },
    meta: {
      layout: Layout.PRIVATE
    }
  }
]