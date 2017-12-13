import * as React from "react";
import { Store } from "../State/store";
import { observer } from "mobx-react";
import { changeColor } from "../State/actions";
import { SyntheticEvent } from "react";
import { Store } from "../State/store";
import { changeTempColor } from "../State/actions";

@observer
export class ColorChanger extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => {
            changeTempColor(e.currentTarget.value);
          }}
          value={Store.tempColor}
        />
        <button onClick={() => changeColor(Store.tempColor)}>
          Change color
        </button>
      </div>
    );
  }
}
