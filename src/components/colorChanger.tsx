import * as React from "react";
import { Store } from "state/store";
import { observer } from "mobx-react";
import { changeColor } from "state/actions";
import { SyntheticEvent } from "react";
import { changeTempColor } from "state/actions";
import { StempColor } from "state/selectors";

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
          value={Store[StempColor]}
        />
        <button onClick={() => changeColor(Store[StempColor])}>
          Change color
        </button>
      </div>
    );
  }
}
