import * as React from "react";
import { createStructuredSelector } from "reselect";
import { changeColor, changeTempColor } from "../../State/actions/color";
import { connect } from "react-redux";
import { selectTempColor } from "../../State/selectors";

export type ColorChangerProps = {
  changeColor: Function;
  changeTempColor: Function;
  temporalColor: string;
};

const mapStateToProps = createStructuredSelector({
  temporalColor: selectTempColor
});

const mapDispatchToProps = {
  changeColor,
  changeTempColor
};

@connect(mapStateToProps, mapDispatchToProps)
export class ColorChanger extends React.Component<ColorChangerProps> {
  render() {
    const { temporalColor, changeTempColor, changeColor } = this.props;
    return (
      <div>
        <input
          type="text"
          onChange={e => {
            changeTempColor(e.currentTarget.value);
          }}
          value={temporalColor}
        />
        <button onClick={() => changeColor(temporalColor)}>Change color</button>
      </div>
    );
  }
}
