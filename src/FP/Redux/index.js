import { reducer } from 'src/FP/Redux/reducer';
import { DECREMENT, INCREMENT } from 'src/FP/Redux/actions';
import { createStore } from 'src/FP/Redux/store';

const initialState = {
  count: 0,
};

const incAction = (payload) => ({
  type: INCREMENT,
  payload,
});

const decAction = (payload) => ({
  type: DECREMENT,
  payload,
});

const store = createStore(reducer, initialState);
const dispatch = store.dispatch;
const subscribeCallback = () => console.log('State Changed!', store.getState());
store.subscribe(subscribeCallback);
dispatch(incAction(10));
dispatch(decAction(5));
