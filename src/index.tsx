import { render } from "solid-js/web";

function App() {
  return (
    <>
      <header>Hello</header>
      <main>Testing</main>
      <footer>FOOTER</footer>
    </>
  );
}

/**
  * @function launch
  * @description Initialize the app when the dom is loaded 
  */
function launch() {
  render(App, document.getElementById("app-root"));
}

if (document.readyState === "complete") {
  launch();
} else {
  window.onload = launch;
}
