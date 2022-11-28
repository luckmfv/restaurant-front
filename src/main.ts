import { installComponents } from '@/components/install'
import { router, prepareAppRoutes } from '@/router'
import { puglinsInstall } from '@/plugins'
import { createApp } from 'vue'
import App from '@/App.vue'

import './assets/main.css'

prepareAppRoutes(router)

const app = createApp(App)

app.use(router)
app.use(installComponents)
app.use(puglinsInstall)

app.mount('#app')
