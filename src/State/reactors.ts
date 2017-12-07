import { tick } from "./actions";

export const logger = color => {
  console.log("reactioned to color", color);
};

export const tock = time => {
  setTimeout(() => tick(), 1000);
};
