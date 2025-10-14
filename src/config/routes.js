import TheLayout from '@/layouts/TheLayout.vue'
import HomePage from '@/views/Home/HomePage.vue'

export const routes = [
  {
    path: '/',
    component: TheLayout,
    children: [{ path: '/', component: HomePage, name: 'home' }],
  },
]
