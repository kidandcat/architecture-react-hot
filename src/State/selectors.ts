import { logger, tock } from "./reactors";
import { reaction, autorun } from "mobx";
import { Store } from "./store";

export const LoadReactions = () => {
  reaction(() => Store.color, logger);
  reaction(() => Store.time, tock, { delay: 1000 });
};
