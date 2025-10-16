import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/common.css'
import '@/assets/control.css'
import '@/assets/style.css'
import '@/assets/icon/icon.css'
const app = createApp(App)

app.use(router)

app.mount('#app')
