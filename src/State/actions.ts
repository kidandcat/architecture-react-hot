import { action, whyRun } from "mobx";
import { Store } from "./store";

export const changeColor = action((newColor: string) => {
  if (Store.color.value !== newColor) {
    console.log("color to", newColor);
    Store.color.value = newColor;
  }
});

export const changeTempColor = action((newColor: string) => {
  if (Store.color.tempValue != newColor) {
    Store.color.tempValue = newColor;
  }
});

export const tick = action(() => {
  Store.time = new Date().toUTCString();
});
