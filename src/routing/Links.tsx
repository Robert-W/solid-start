import { Link } from '@solidjs/router';

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
            <Link href={route.path}>{route.label}</Link>
          </li>
        ))
      }
    </>
  );
}
