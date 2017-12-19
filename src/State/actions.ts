import { action, IAction } from "mobx";
import { Store } from "./store";

export const changeColor: Function & IAction = action((newColor: string) => {
  if (Store.color.value !== newColor) {
    console.log("color to", newColor);
    Store.color.value = newColor;
  }
});

export const changeTempColor: Function & IAction = action(
  (newColor: string) => {
    if (Store.color.tempValue != newColor) {
      Store.color.tempValue = newColor;
    }
  }
);

export const tick: Function & IAction = action(() => {
  Store.time = new Date().toUTCString();
});
