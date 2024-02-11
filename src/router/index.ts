import { createRouter, createWebHistory } from 'vue-router'

import HeroPage from '@/views/HeroPage.vue'

const ContactsPage = ()=> import("@/views/ContactsPage.vue");
const PosterPage = () => import('@/views/PosterPage.vue');
const CoverPage = () => import('@/views/CoverPage.vue');
const AiPage = () => import('@/views/AiPage.vue');
const LogotypesPage = () => import('@/views/LogotypesPage.vue');
const IllustrationPage = () => import('@/views/IllustrationPage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HeroPage
    },
    // {
    //   path: '/contacts',
    //   name: 'contacts',
    //   component: ContactsPage
    // },
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
    {
      path: '/ai',
      name: 'ai',
      component: AiPage
    },
    {
      path: '/logotypes',
      name: 'logotypes',
      component: LogotypesPage
    },
    {
      path: '/illustrations',
      name: 'illustration',
      component: IllustrationPage
    },
  ]
})

export default router
