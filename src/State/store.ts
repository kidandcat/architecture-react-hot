import { observable, toJS } from "mobx";

let makeStore = () => {
  const store = observable({
    color: "black"
  });
  return store;
};

export interface Store {
  color: string;
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
