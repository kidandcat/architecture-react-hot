import * as React from "react";
import { Clock } from "components/clock";
import { ColorChanger } from "components/colorChanger";
import { Store } from "state/store";
import { Scolor } from "state/selectors";
import { observer } from "mobx-react";

@observer
export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <div>
          <ColorChanger />
          Here you have a Clock coloured with{" "}
          <span style={{ color: Store[Scolor] }}>{Store[Scolor]}</span>:
          <Clock />
        </div>
      </div>
    );
  }
}
