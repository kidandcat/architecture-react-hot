import { combineReducers, AnyAction } from "redux";
import { colorReducer, ColorState } from "./color";
import { timeReducer, TimeState } from "./time";

export interface RootState {
  color: ColorState;
  time: TimeState;
}

export const rootReducer = combineReducers<AnyAction>({
  color: colorReducer,
  time: timeReducer
});
