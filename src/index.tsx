import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/app";
import { LoadReactions } from "./state/reactions";
import { tick } from "./state/actions";

LoadReactions();

ReactDOM.render(<App />, document.getElementById("root"));

setTimeout(() => {
  tick();
}, 1000);
