import { AccountReducerType } from '../types';
import { AccountActionType } from './actions';

const initialState: AccountReducerType = {
  value: 0,
};

export const accountReducer = (state = initialState, action: AccountActionType) => {
  console.log(state);
  switch (action.type) {
    case 'INCREASE':
      return { ...state, value: ++state.value };
    case 'DECREASE':
      return { ...state, value: --state.value };
    default:
      return state;
  }
};
