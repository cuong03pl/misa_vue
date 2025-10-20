import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/style/common.css'
import '@/assets/style/control.css'
import '@/assets/style/style.css'
import '@/assets/icon/icon.css'
import { i18n } from './plugin/i18n'
import MsButton from './components/ms-button/MsButton.vue'
import MsInput from './components/ms-form-field/MsInput.vue'
import MsSelect from './components/ms-form-field/MsSelect.vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import '@/assets/style/custom.css'

const app = createApp(App)
const options = {
  position: 'bottom-right',
  timeout: 5000,
  icon: false,
}

app.use(Toast, options)
app.component('MsButton', MsButton)
app.component('MsInput', MsInput)
app.component('MsSelect', MsSelect)
app.use(router)
app.use(i18n)
app.mount('#app')
