import * as React from "react";
import { observer } from "mobx-react";
import { Store } from "../State/store";

@observer
export class Clock extends React.Component<{}, {}> {
  render() {
    return <div style={{ color: Store.color }}>{Store.time.split(" ")[4]}</div>;
  }
}
