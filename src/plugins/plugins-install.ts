import { fontAwesomeInstall } from '@/plugins/font-awesome'
import type { App } from 'vue'

export const puglinsInstall = (app: App<any>): void => {
  fontAwesomeInstall(app)
}