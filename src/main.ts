import { installComponents } from './components/install'
import { createApp } from 'vue'
import { router, prepareAppRoutes } from './router'
import App from './App.vue'

import './assets/main.css'

prepareAppRoutes(router)

const app = createApp(App)

app.use(router)
app.use(installComponents)

app.mount('#app')
