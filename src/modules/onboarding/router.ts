import type { RouteRecordRaw } from 'vue-router'
import { Layout } from '@/layouts/enums'
import { LoginPage, CreateAccount } from './pages'

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