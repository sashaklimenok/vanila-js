import { DECREMENT, INCREMENT } from 'src/FP/Redux/actions';

export const incAction = (payload) => ({
  type: INCREMENT,
  payload,
});

export const decAction = (payload) => ({
  type: DECREMENT,
  payload,
});
