import { NavLink } from '@solidjs/router';
import { RouteConfig } from './config';
import { Component } from 'solid-js';

/**
 * @function Links
 * @description An array of links as list elements
 */
const Links: Component<{ routes: Array<RouteConfig>}> = (props) => (
  <>
    {props.routes
      .filter(route => route.path)
      .map(route => (
        <li>
          <NavLink 
            href={route.path} 
            aria-label={route.aria}
            end={true}
            inactiveClass='navigation__link'
            activeClass='navigation__link active'>
            <route.icon size={24} class='navigation__icon' />
          </NavLink>
        </li>
      ))
    }
  </>
);

export default Links;
