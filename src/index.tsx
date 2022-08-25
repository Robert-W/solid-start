import { render } from "solid-js/web";
import App from './core/App';

import './index.scss';

/**
  * @function launch
  * @description Initialize the app when the dom is loaded 
  */
function launch() {
  render(() => <App />, document.getElementById("app-root"));
}

if (document.readyState === "complete") {
  launch();
} else {
  window.onload = launch;
}
