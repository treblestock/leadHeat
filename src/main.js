import { createApp, ref, computed, watch } from 'vue'
import App from '@/components/App.vue'
const app = createApp(App)



import UI from '@/components/UI'
for (const key in UI) {
  const value = UI[key]
  app.component(key, value)
}

import directives from '@/components/directives'
for (const key in directives) {
  const value = directives[key]
  app.directive(key, value)
}


import { router } from '@/router'
app.use(router)






import { store } from '@/store'
app.use(store)





app.mount('#app')
