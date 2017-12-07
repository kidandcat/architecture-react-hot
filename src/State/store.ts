import { observable, toJS } from "mobx";

let makeStore = () => {
  const store = observable({
    color: "black",
    time: new Date().toUTCString()
  });
  return store;
};

export interface Store {
  color: string;
  time: string;
}

export let Store = makeStore();

if (module.hot) {
  console.log("module.hot");
  module.hot.dispose(function() {
    console.log("disposed");
    window.localStorage.setItem("_STORE", JSON.stringify(toJS(Store)));
  });

  module.hot.accept(function() {
    console.log("accepted");
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
