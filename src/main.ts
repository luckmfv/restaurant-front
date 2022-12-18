import { installComponents } from '@/components/install'
import { router, prepareAppRoutes } from '@/router'
import { puglinsInstall } from '@/plugins'
import { createApp } from 'vue'
import App from '@/App.vue'
import VueTippy from 'vue-tippy'

import './assets/main.css'
import 'tippy.js/dist/tippy.css'

prepareAppRoutes(router)

const app = createApp(App)

app.use(router)
app.use(installComponents)
app.use(puglinsInstall)
app.use(VueTippy, {
  directive: 'tippy',
  component: 'tippy'
})

app.mount('#app')
