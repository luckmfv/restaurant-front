import { faUser, faUserFriends, faFileInvoiceDollar, faStore } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import type { App } from 'vue'


export const fontAwesomeInstall = (app: App): void => {
  library.add(faUser, faUserFriends, faFileInvoiceDollar, faStore)
  app.component('FontAwesomeIcon', FontAwesomeIcon)
}