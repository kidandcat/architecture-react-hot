import * as React from "react";
import { Clock } from "./clock";
import { ColorChanger } from "./colorChanger";

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <ColorChanger />
        <div>
          Here you have a Clock coloured with <span>Color</span>:
          <Clock />
        </div>
      </div>
    );
  }
}
