import { action, whyRun } from "mobx";
import { Store } from "state/store";
import { Scolor, StempColor } from "state/selectors";

export const changeColor = action((newColor: string) => {
  if (Store[Scolor] !== newColor) {
    console.log("color to", newColor);
    Store[Scolor] = newColor;
  }
});

export const changeTempColor = action((newColor: string) => {
  if (Store[StempColor] != newColor) {
    Store[StempColor] = newColor;
  }
});

export const tick = action(() => {
  Store.time = new Date().toUTCString();
});
