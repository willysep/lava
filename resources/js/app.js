import './bootstrap';
import 'admin-lte';
import '@fortawesome/fontawesome-free';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



const app = createApp(App);
app.use(router)
app.mount('#app')