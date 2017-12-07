import { logger } from "./reactors";
import { reaction } from "mobx";
import { Store } from "./store";

const colorLoggerReactor = reaction(() => Store.color, logger);

export const InitReactors = () => {
  colorLoggerReactor();
};
