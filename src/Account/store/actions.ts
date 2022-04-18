export const increase = () => ({
  type: 'INCREASE',
});
export const decrease = () => ({
  type: 'DECREASE',
});

export type AccountActionType = ReturnType<typeof increase | typeof decrease>;
