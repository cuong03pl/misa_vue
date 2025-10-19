import TheLayout from '@/layouts/TheLayout.vue'
import NotFoundPage from '@/page/NotFoundPage.vue'
import CandidatePage from '@/views/candidate/CandidatePage.vue'

export const routes = [
  {
    path: '/',
    component: TheLayout,
    children: [{ path: '/', component: CandidatePage, name: 'home' }],
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage },
]
