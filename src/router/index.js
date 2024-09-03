import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from '@/views/MainPageView.vue'
import VideoPageView from '@/views/VideoPageView.vue'
import ChannelPageView from '@/views/ChannelPageView.vue'
import SearchPageView from '@/views/SearchPageView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPageView
    },
    
    {
      path: '/video/:id',
      name: 'video',
      component: ()=> VideoPageView
    },
    {
      path: '/channel/:id',
      name: 'channel',
      component: ChannelPageView
    },
    {
      path: '/search/:id',
      name: 'search',
      component: SearchPageView
    }
  ]
})

export default router
