import type { App } from 'vue'
import * as components from '@/components'

export const installComponents = (app: App): void => {
  Object.values(components).forEach((component) => {
    app.component(component.name, component)
  })
}