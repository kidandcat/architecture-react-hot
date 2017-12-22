import { tickEpic } from "./tick.epic";
import { combineEpics } from "redux-observable";

export const rootEpic = combineEpics(tickEpic);
