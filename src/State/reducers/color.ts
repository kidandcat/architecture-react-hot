import { ColorActions } from "../actions/color";
import { Reducer, AnyAction } from "redux";

export type ColorState = {
  color: string;
  tempColor: string;
};

const INITIAL_STATE = {
  color: "black",
  tempColor: ""
};

export const colorReducer: Reducer<ColorState> = (
  state: ColorState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case ColorActions.changeColor:
      return {
        ...state,
        color: action.payload
      };
    case ColorActions.changeTempColor:
      return {
        ...state,
        tempColor: action.payload
      };
    default:
      return state;
  }
};
