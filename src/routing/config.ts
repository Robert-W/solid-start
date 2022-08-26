import { BiRegularHomeHeart } from 'solid-icons/bi';
import { BiSolidInfoCircle } from 'solid-icons/bi';
import { lazy, Component } from 'solid-js';
import { IconProps } from 'solid-icons';


export interface RouteConfig {
  path: string;
  label: string;
  aria: string;
  icon: Component<IconProps>;
  component: Component;
}

export default [
  {
    path: '/about',
    label: 'About',
    aria: 'Navigate to About',
    icon: BiSolidInfoCircle,
    component: lazy(() => import(/* webpackChunkName: "about" */ '../pages/about/index'))
  },
  {
    path: '/',
    label: 'Home',
    aria: 'Navigate to Home',
    icon: BiRegularHomeHeart,
    component: lazy(() => import(/* webpackChunkName: "home" */ '../pages/home/index'))
  }
]
