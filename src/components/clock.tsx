import * as React from "react";
import { observer } from "mobx-react";
import { Store } from "../state/store";

@observer
export class Clock extends React.Component<{}, {}> {
  render() {
    return (
      <div style={{ color: Store.color.value }}>{Store.time.split(" ")[4]}</div>
    );
  }
}
