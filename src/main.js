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
import MsTextarea from './components/ms-form-field/MsTextarea.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura' // ví dụ theme Aura
import 'primeicons/primeicons.css'
import MsSelectV2 from './components/ms-form-field/MsSelectV2.vue'
import MsCombobox from './components/ms-form-field/MsCombobox.vue'
const app = createApp(App)
const options = {
  position: 'bottom-right',
  timeout: 5000,
  icon: false,
}

app.use(Toast, options)
app.component('MsButton', MsButton)
app.component('MsInput', MsInput)
app.component('MsTextarea', MsTextarea)
app.component('MsSelect', MsSelect)
app.component('MsSelectV2', MsSelectV2)
app.component('MsCombobox', MsCombobox)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.use(router)
app.use(i18n)
app.mount('#app')
