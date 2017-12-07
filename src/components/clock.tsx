import * as React from "react";
import { observer } from "mobx-react";
import { Store } from "../State/store";
import { ColorChanger } from "./colorChanger";

interface State {
  time: string;
}

@observer
export class Clock extends React.Component<{}, State> {
  private timer: number;

  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toUTCString()
    };
  }

  componentWillMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date().toUTCString()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <ColorChanger />
        <div style={{ color: Store.color }}>{this.state.time}</div>
      </div>
    );
  }
}
