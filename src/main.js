import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/main.css'
import './assets/animations.css'
import myTitle from './components/Title.vue'


createApp(App)
.use(bootstrap)
.use(router)
.component('my-title', myTitle)
.mount('#app')
