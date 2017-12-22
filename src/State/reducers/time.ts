import { TimeActions, ITick } from "../actions/time";
import { Reducer } from "redux";

export type TimeState = {
  time: string;
};

const INITIAL_STATE = {
  time: now()
};

export const timeReducer: Reducer<TimeState> = (
  state: TimeState = INITIAL_STATE,
  action: ITick
) => {
  switch (action.type) {
    case TimeActions.tick:
      return {
        ...state,
        time: now()
      };
    default:
      return state;
  }
};

function now() {
  return new Date().toUTCString();
}
