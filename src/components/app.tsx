import * as React from "react";
import { Clock } from "./clock";
import { ColorChanger } from "./colorChanger";
import { Store } from "../State/store";
import { observer } from "mobx-react";

@observer
export class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello World!!</h2>
        <div>
          <ColorChanger />
          Here you have a {Store.color} Clock: <Clock />
        </div>
      </div>
    );
  }
}
