import { createRouter, createWebHistory } from 'vue-router'

import HeroPage from '@/views/HeroPage.vue'

const ContactsPage = ()=> import("@/views/ContactsPage.vue");
const PosterPage = () => import('@/views/PosterPage.vue');
const CoverPage = () => import('@/views/CoverPage.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HeroPage
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactsPage
    },
    {
      path: '/posters',
      name: 'posters',
      component: PosterPage
    },
    {
      path: '/covers',
      name: 'covers',
      component: CoverPage
    },
  ]
})

export default router
