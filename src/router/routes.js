export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/AuthView.vue'),
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('@/views/CatalogView.vue'),
  },
  {
    path: '/catalog/:id',
    name: 'catalog-book',
    component: () => import('@/views/CatalogBookView.vue'),
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: () => import('@/views/AboutUsView.vue'),
  },
];
