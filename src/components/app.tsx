import * as React from "react";
import { Clock } from "./clock";
import { ColorChanger } from "./colorChanger";
import { observer } from "mobx-react";
import { Store } from "../state/store";

@observer
export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <div>
          <ColorChanger />
          Here you have a Clock coloured with{" "}
          <span style={{ color: Store.color.value }}>{Store.color.value}</span>:
          <Clock />
        </div>
      </div>
    );
  }
}
