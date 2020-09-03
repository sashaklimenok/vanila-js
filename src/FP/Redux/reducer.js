import { DECREMENT, INCREMENT } from 'src/FP/Redux/actions';

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + payload };
    case DECREMENT:
      return { ...state, count: state.count - payload };
    default: return state;
  }
};
