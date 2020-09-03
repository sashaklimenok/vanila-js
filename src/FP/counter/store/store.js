import { createStore } from 'src/FP/Redux/store';
import { reducer } from 'src/FP/counter/store/reducer';

const initialState = 0;

export const store = createStore(reducer, initialState);
