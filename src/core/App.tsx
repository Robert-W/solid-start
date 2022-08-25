import { config as routes, Links, Switch } from '../routing';
import { Router } from '@solidjs/router';
import { Component } from 'solid-js';

const App: Component = () => {
  return (
    <Router>
      <header class='header'>Welcome to Solid</header>
      <main class='main flex'>
        <nav aria-labelledby='primary-navigation' class='navigation'>
          <ul class='navigation__menu'>
            <Links routes={routes} />
          </ul>
        </nav>
        <div class='router-outlet'>
          <Switch routes={routes} />
        </div>
      </main>
      <footer class='footer'>Developed By: Robert Winterbottom</footer>
    </Router>
  );
}

export default App;
