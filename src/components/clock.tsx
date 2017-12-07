import * as React from "react";
import { observer } from "mobx-react";
import { Store } from "../State/store";
import { changeColor } from "../State/actions";
import { SyntheticEvent } from "react";

interface State {
  time: string;
}
@observer
export class Clock extends React.Component<{}, State> {
  private timer: number;
  private tempColor: string;

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

  saveTemporalColor = (e: SyntheticEvent<HTMLInputElement>) => {
    this.tempColor = e.currentTarget.value;
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.saveTemporalColor} />
        <button onClick={() => changeColor(this.tempColor)}>
          Change color
        </button>
        <div style={{ color: Store.color }}>{this.state.time}</div>
      </div>
    );
  }
}
