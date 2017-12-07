import { action } from "mobx";
import { Store } from "./store";

export const changeColor = action((newColor: string) => {
  if (Store.color != newColor) {
    console.log("color to ", newColor);
    Store.color = newColor;
  }
});
