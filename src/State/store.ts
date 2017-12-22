import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import logger from "redux-logger";
import { rootEpic } from "./epics";
import { rootReducer } from "./reducers";

//const isDevEnv = process.env.NODE_ENV === "development";
const isDevEnv = true;

function _getMiddleware() {
  let middleware = [createEpicMiddleware(rootEpic)];

  if (isDevEnv) {
    middleware = [...middleware, logger];
  }

  return applyMiddleware(...middleware);
}

function _getEnhancers() {
  let enhancers = [];

  if (isDevEnv && window.devToolsExtension) {
    enhancers = [...enhancers, window.devToolsExtension()];
  }

  return enhancers;
}

function _enableHotLoader(store) {
  if (isDevEnv) {
    (module as any).hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers/index");
      store.replaceReducer(nextRootReducer);
    });
  }
}

export const configureStore = (initialState: any) => {
  const store = compose(_getMiddleware(), ..._getEnhancers())(createStore)(
    rootReducer,
    initialState
  );

  _enableHotLoader(store);
  return store;
};
