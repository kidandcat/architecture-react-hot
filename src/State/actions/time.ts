export enum TimeActions {
  tick = "TICK"
}

export const tick = () => {
  return {
    type: TimeActions.tick
  };
};
