import { tick } from "state/actions";
import { reaction } from "mobx";
import { Store } from "state/store";
import { logger } from "state/effects";
import { Scolor, Stime } from "state/selectors";

let Reactions = [];

export const LoadReactions = () => {
  Reactions = Reactions.filter(r => r() && false);
  Reactions = [
    reaction(() => Store[Scolor], logger),
    reaction(() => Store[Stime], tick, { delay: 1000 })
  ];
};

declare const module: any;

if (module.hot) {
  module.hot.dispose(() => {
    Reactions = Reactions.filter(r => r() && false);
  });
}
