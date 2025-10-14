import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/common.css'
import '@/assets/control.css'
import '@/assets/style.css'
const app = createApp(App)

app.use(router)

app.mount('#app')
