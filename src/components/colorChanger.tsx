import * as React from "react";
import { Store } from "../State/store";
import { changeColor } from "../State/actions";
import { SyntheticEvent } from "react";

export class ColorChanger extends React.Component<{}, {}> {
  private tempColor: string;

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
      </div>
    );
  }
}
