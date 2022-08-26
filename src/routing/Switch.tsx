import { Routes, Route } from '@solidjs/router';
import { Component, For } from 'solid-js';
import { RouteConfig } from './config';

/**
 * @function Switch
 * @description Swith that renders our routes
 */
const Switch: Component<{ routes: Array<RouteConfig> }> = (props) => (
  <Routes>
    <For each={props.routes.filter(route => route.path)}>{route => (
      <Route path={route.path} component={route.component} />
    )}</For>
  </Routes>
);

export default Switch;
