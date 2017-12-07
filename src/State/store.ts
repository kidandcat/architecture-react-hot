import { observable } from "mobx";

const makeStore = () => {
  const store = observable({
    color: "black"
  });
  return store;
};

export interface Store {
  color: string;
}

export const Store = makeStore();
