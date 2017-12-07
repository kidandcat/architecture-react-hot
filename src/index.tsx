import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/app";
import { Store } from "./State/store";
import { InitReactors } from "./State/selectors";

InitReactors();
ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);
