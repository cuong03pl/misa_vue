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

const app = createApp(App)

app.component('MsButton', MsButton)
app.component('MsInput', MsInput)
app.component('MsSelect', MsSelect)
app.use(router)
app.use(i18n)
app.mount('#app')
