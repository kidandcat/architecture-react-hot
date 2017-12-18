import { tick } from "./actions";
import { reaction } from "mobx";
import { Store } from "./store";
import { logger } from "./effects";

let Reactions = [];

export const LoadReactions = () => {
  Reactions = Reactions.filter(r => r() && false);
  Reactions = [
    reaction(() => Store.color.value, logger),
    reaction(() => Store.time, tick, { delay: 1000 })
  ];
};

declare const module: any;

if (module.hot) {
  module.hot.dispose(() => {
    Reactions = Reactions.filter(r => r() && false);
  });
}
