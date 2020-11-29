import { hot } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import GlobalStateProvider from "./stores/global-provider";

const Index = hot(module)(() => {
  return (
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  );
});

window.addEventListener("load", (event) => {
  const element = document.getElementById("app");
  ReactDOM.render(<Index />, element);
});
