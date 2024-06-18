import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventDetails from '../views/Events/EventDetails.vue'
import About from '@/views/About.vue'
import Register from '@/views/Events/Register.vue'
import Edit from '@/views/Events/Edit.vue'
import Layout from '@/views/Events/Layout.vue'

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
      path: '/events/:id',
      name: 'event-layout',
      props: true,
      component: Layout,
      children: [
        {
          path: '',
          name: 'event-details',
          component: EventDetails
        },
        {
          path: 'register',
          name: 'event-register',
          component: Register
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: Edit
        }
      ]
    },

    // Nested Redirect version 1
    // {
    //   path: '/event/:id',
    //   redirect: () => {
    //     return {
    //       name: 'event-details'
    //     }
    //   },
    //   children: [
    //     { path: 'register', redirect: () => ({ name: 'event-register' }) },
    //     { path: 'edits', redirect: () => ({ name: 'event-edit' }) }
    //   ]
    // },

    // Nested Redirect version 2
    {
      path: '/event/:afterEvent(.*)',
      redirect: (to) => {
        return {
          path: '/events/' + to.params.afterEvent
        }
      }
    },
    {
      path: '/about-us',
      name: 'about',
      component: About
    },
    {
      path: '/about',
      redirect: () => {
        return {
          name: 'about'
        }
      }
    }
  ]
})

export default router
