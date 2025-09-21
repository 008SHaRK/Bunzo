// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Vue
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// CKEditor
import CKEditor from '@ckeditor/ckeditor5-vue';

// i18n
import i18n from './i18n';

const app = createApp(App);

// Plugin-ləri əlavə et
app.use(router);
app.use(CKEditor);
app.use(i18n);

// App-ı mount et
app.mount('#app');
