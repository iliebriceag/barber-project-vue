import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/main.css'
import './assets/animations.css'
import myTitle from './components/Title.vue'

//Lightbox2
import 'lightbox2/dist/css/lightbox.min.css'
import lightbox2 from 'lightbox2/dist/js/lightbox-plus-jquery.min.js'

import { createHead } from '@vueuse/head';

const head = createHead();

createApp(App)
.use(bootstrap)
.use(router)
.use(head)
.use(lightbox2)
.component('my-title', myTitle)
.mount('#app')
