import { createSelector } from "reselect";
import { RootState } from "../reducers/index";

const timeSelector = (state: RootState) => state.time.time;

export const selectTime = createSelector(timeSelector, time => time);
