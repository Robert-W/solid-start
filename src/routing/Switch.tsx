import { For } from "solid-js";
import { Routes, Route } from '@solidjs/router';

/**
 * @function Switch
 * @description Switvh that renders our routes
 */
export default function Switch(props) {
  return (
    <Routes>
      <For each={props.routes.filter(route => route.path)}>{route => (
        <Route path={route.path} component={route.component} />
      )}</For>
    </Routes>
  );
}
