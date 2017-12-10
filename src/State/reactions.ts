import { tick } from "./actions";
import { reaction } from "mobx";
import { Store } from "./store";
import { logger } from "./effects";

export const LoadReactions = () => {
  reaction(() => Store.color, logger);
  reaction(() => Store.time, tick, { delay: 1000 });
};
