import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventDetails from '../views/Events/EventDetails.vue'
import About from '@/views/About.vue'
import Register from '@/views/Events/Register.vue'
import Edit from '@/views/Events/Edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList,
      props: (route) => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true,
      component: EventDetails
    },
    {
      path: '/event/:id/register',
      name: 'event-register',
      props: true,
      component: Register
    },
    {
      path: '/event/:id/edit',
      name: 'event-edit',
      props: true,
      component: Edit
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router
