import { DECREMENT, INCREMENT } from 'src/FP/Redux/actions';

export const reducer = (state = 0, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    default: return state;
  }
};
