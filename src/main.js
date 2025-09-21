import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CKEditor from '@ckeditor/ckeditor5-vue' // ✅ CKEditor import

const app = createApp(App)
app.use(router)
app.use(CKEditor) // ✅ CKEditor plugin aktiv edildi
app.mount('#app')
