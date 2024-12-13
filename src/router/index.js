import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import LoginView from '../views/Login.vue'
import AdminView from '../views/Admin.vue'
import BlogView from '@/views/Blog.vue'
import BlogDetailPage from '@/views/BlogDetailPage.vue'
import { getAuth } from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog/:id', // Dynamic route with an "id" parameter
      name: 'BlogDetailPage',
      component: BlogDetailPage, // The detailed blog view
      props: true, // Pass route params as props
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },

    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      meta: {
        requireAuth: true,
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (getAuth().currentUser) {
      next()
    } else {
      alert('You need to log in to access this page')

      next('/login')
    }
  } else {
    next()
  }
})

export default router
