import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { useHead } from '@vueuse/head';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: "/contact", name: "Contact", component: () => import("../views/Contact.vue"), meta: {
      title: 'Contact MaoStudio Frizerie Sectorul 6, Bucuresti',
      metaTags: [
        {
          name: 'Detalii Frizeria MaoStudio din sectorul 6, Bucuresti',
          content: 'Frizerie, Stilizare, Pensat, Masaj Scalp, Tunsori moderne, Tratamente'
        }
      ]
    }
  },
  {
    path: "/despre", name: "Despre Noi", component: () => import("../views/About.vue"), meta: {
      title: 'Despre MaoStudio Frizerie Sectorul 6, Bucuresti',
      metaTags: [
        {
          name: 'Detalii Frizeria MaoStudio din sectorul 6, Bucuresti',
          content: 'Frizerie, Stilizare, Pensat, Masaj Scalp, Tunsori moderne, Tratamente'
        }
      ]
    }
  },
  {
    path: "/preturi", name: "Preturi", component: () => import("../views/Prices.vue"), meta: {
      title: 'Preturi MaoStudio Frizerie Sectorul 6, Bucuresti',
      metaTags: [
        {
          name: 'Detalii Frizeria MaoStudio din sectorul 6, Bucuresti',
          content: 'Frizerie, Stilizare, Pensat, Masaj Scalp, Tunsori moderne, Tratamente'
        }
      ]
    }
  },
  {
    path: "/servicii", name: "Serviciile Noastre", component: () => import("../views/Services.vue"), meta: {
      title: 'Servicii MaoStudio Frizerie Sectorul 6, Bucuresti',
      metaTags: [
        {
          name: 'Detalii Frizeria MaoStudio din sectorul 6, Bucuresti',
          content: 'Frizerie, Stilizare, Pensat, Masaj Scalp, Tunsori moderne, Tratamente'
        }
      ]
    }
  },
  {
    path: "/galerie", name: "Galerie", component: () => import("../views/Gallery.vue"), meta: {
      title: 'Galerie Foto MaoStudio Frizerie Sectorul 6, Bucuresti',
      metaTags: [
        {
          name: 'Detalii Frizeria MaoStudio din sectorul 6, Bucuresti',
          content: 'Frizerie, Stilizare, Pensat, Masaj Scalp, Tunsori moderne, Tratamente'
        }
      ]
    }
  },
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

router.beforeEach((to, from, next) => {
  const meta = to.meta;
  if (meta) {
    useHead({
      title: meta.title,
      meta: meta.metaTags
    });
  }
  next();
});

export default router
