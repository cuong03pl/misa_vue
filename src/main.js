import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/common.css'
import '@/assets/control.css'
import '@/assets/style.css'
import '@/assets/icon/icon.css'
import { i18n } from './plugin/i18n'
const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
