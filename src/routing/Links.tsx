import { NavLink } from '@solidjs/router';

/**
 * @function Links
 * @description An array of links as list elements
 */
export default function Links(props) {
  return (
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
}
