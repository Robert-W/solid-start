import { lazy } from 'solid-js';

export default [
  {
    path: '/about',
    label: 'About',
    component: lazy(() => import('../pages/about/index'))
  },
  {
    path: '/',
    label: 'Home',
    component: lazy(() => import('../pages/home/index'))
  }
]
