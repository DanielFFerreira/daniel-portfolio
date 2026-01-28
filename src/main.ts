import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/style.css'

const app = createApp(App)
app.use(router)

router.afterEach((to) => {
  const title = (to.meta?.title as string | undefined) ?? 'Portfólio | Vue'
  document.title = title
})

app.mount('#app')
