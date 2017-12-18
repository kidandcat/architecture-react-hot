import { observable, toJS } from "mobx";

let makeStore = () =>
  observable({
    color: {
      value: "black",
      tempValue: ""
    },
    time: new Date().toUTCString()
  });

export let Store = makeStore();

declare const module: any;

if (module.hot) {
  module.hot.dispose(function() {
    window.localStorage.setItem("_STORE", JSON.stringify(toJS(Store)));
  });

  module.hot.accept(function() {
    const storedStore = window.localStorage.getItem("_STORE");
    if (storedStore) {
      makeStore = () => {
        const store = observable(JSON.parse(storedStore));
        return store;
      };
      Store = makeStore();
    }
  });
}
