import TheLayout from '@/layouts/TheLayout.vue'
import HomePage from '@/views/Home/HomePage.vue'
import NotFoundPage from '@/views/NotFound/NotFoundPage.vue'

export const routes = [
  {
    path: '/',
    component: TheLayout,
    children: [{ path: '/', component: HomePage, name: 'home' }],
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage },
]
