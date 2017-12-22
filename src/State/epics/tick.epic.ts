import { TimeActions } from "../actions/time";
import { Epic } from "redux-observable";
import { ofType } from "redux-observable";
import { delay, mapTo } from "rxjs/operators";
import { Action } from "redux";

export const tickEpic: Epic<Action, {}> = action$ =>
  action$.pipe(
    ofType(TimeActions.tick),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo({ type: TimeActions.tick })
  );
