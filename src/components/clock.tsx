import * as React from "react";
import { observer } from "mobx-react";
import { Store } from "../State/store";

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
      <div style={{ color: Store.color }}>{this.state.time.split(" ")[4]}</div>
    );
  }
}
