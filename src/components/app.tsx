import * as React from "react";
import { Clock } from "./clock";

export class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello World!!</h2>
        <div>
          Here you have a Clock: <Clock />
        </div>
      </div>
    );
  }
}
