import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/app";
import { LoadReactions } from "./State/reactions";
import { tick } from "./State/actions";

LoadReactions();

ReactDOM.render(<App />, document.getElementById("root"));

setTimeout(() => {
  tick();
}, 1000);
