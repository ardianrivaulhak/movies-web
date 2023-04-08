import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import ParentPage from '@/pages/ParentPage.vue';
import DetailPage from '@/pages/DetailPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';
import FavoritePage from '@/pages/FavoritePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundPage,
    },
    {
      path: '/',
      component: ParentPage,
      children: [
        {
          path: '',
          name: 'home',
          component: HomePage,
        },
        {
          path: 'favorites',
          name: 'favorites',
          component: FavoritePage,
        },
        {
          path: 'movies/:movieId',
          name: 'detailMovie',
          component: DetailPage,
        },
      ],
    },
  ],
});

export default router;
