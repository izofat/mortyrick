import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CharacterDetailsView from '../views/CharacterDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
        path: '/details/:id',
        name: 'CharacterDetailsView',
        component : CharacterDetailsView,
        props : true,
    }    
  ]
})

export default router
