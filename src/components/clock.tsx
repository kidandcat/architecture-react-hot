import * as React from "react";
import { observer } from "mobx-react";
import { Store } from "state/store";
import { Scolor, Stime } from "state/selectors";

@observer
export class Clock extends React.Component<{}, {}> {
  render() {
    return (
      <div style={{ color: Store[Scolor] }}>{Store[Stime].split(" ")[4]}</div>
    );
  }
}
