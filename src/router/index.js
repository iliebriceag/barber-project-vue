import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  { path: "/contact", name: "Contact", component: () => import("../views/Contact.vue") },
  { path: "/despre", name: "Despre Noi", component: () => import("../views/About.vue"), },
  { path: "/preturi", name: "Preturi", component: () => import("../views/Prices.vue") },
  { path: "/servicii", name: "Serviciile Noastre", component: () => import("../views/Services.vue") },
  { path: "/galerie", name: "Galerie", component: () => import("../views/Gallery.vue") },
  // 
  { path: "/:pathName(.*)", name: "NotFound", component: () => import("../views/Home.vue") },
  { path: '/.*', redirect: { name: 'home' } },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // click scroll to top
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  },

})

export default router
