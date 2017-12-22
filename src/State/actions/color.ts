import { ActionCreator } from "react-redux";
import { Action } from "redux";

export enum ColorActions {
  changeColor = "CHANGE_COLOR",
  changeTempColor = "CHANGE_TEMP_COLOR"
}

export const changeColor: ActionCreator<Action> = (color: string) => {
  return {
    type: ColorActions.changeColor,
    payload: color
  };
};

export const changeTempColor: ActionCreator<Action> = (color: string) => {
  return {
    type: ColorActions.changeTempColor,
    payload: color
  };
};
