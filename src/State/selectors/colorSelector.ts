import { createSelector } from "reselect";
import { RootState } from "../reducers/index";

const colorSelector = (state: RootState) => state.color;

export const selectColor = createSelector(colorSelector, color => color.color);

export const selectTempColor = createSelector(
  colorSelector,
  color => color.tempColor
);
