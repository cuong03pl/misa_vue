import TheLayout from '@/layouts/TheLayout.vue'
import CandidatePage from '@/views/Candidate/CandidatePage.vue'
import NotFoundPage from '@/views/NotFound/NotFoundPage.vue'

export const routes = [
  {
    path: '/',
    component: TheLayout,
    children: [{ path: '/', component: CandidatePage, name: 'home' }],
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundPage },
]
