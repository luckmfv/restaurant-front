import { LoginPage, CreateAccount } from '@/modules/auth/pages'
import type { RouteRecordRaw } from 'vue-router'
import { Layout } from '@/layouts/enums'

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'auth.login',
    component: LoginPage,
    meta: {
      layout: Layout.PUBLIC
    }
  },
  {
    path: '/criar-conta',
    name: 'auth.createAccount',
    component: CreateAccount
  }
]