import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter, createWebHistory, NProgress } from 'vue-router'
import NProgress from 'nprogress'
import EventList from '../views/EventList.vue'
import EventDetails from '../views/Events/EventDetails.vue'
import About from '@/views/About.vue'
import Register from '@/views/Events/Register.vue'
import Edit from '@/views/Events/Edit.vue'
import Layout from '@/views/Events/Layout.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'
import { inject } from 'vue'

// const GStore = inject('GStore')

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
          component: Edit,
          meta: { requireAuth: true }
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
      path: '/404/:resource',
      name: '404Resource',
      component: NotFound,
      props: true
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkError,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFound
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

router.beforeEach((to, from) => {
  NProgress.start()

  const GStore = inject('GStore')
  const notAuthorized = true
  if (to.meta.requireAuth && notAuthorized) {
    GStore.flashMessage = 'Sorry, you are not authorized to view this page'

    setTimeout(() => {
      GStore.flashMessage = ''
    }, 3000)

    if (from.href) {
      // <--- If this navigation came from a previous page.
      return false
    } else {
      // <--- Must be navigating directly
      return { path: '/' } // <--- Push navigation to the root route.
    }
  }
})

export default router
