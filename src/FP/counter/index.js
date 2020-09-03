/* eslint-disable new-cap */
import { Button } from 'src/FP/counter/Button';
import { Count } from 'src/FP/counter/Count';
import { connect } from 'src/FP/counter/store/connetct';
import { decAction, incAction } from 'src/FP/counter/store/actionCreater';

const App = ({ props }) => {
  const { value, increment, decrement } = props;
  const incrementBtn = Button('+');
  const decrementBtn = Button('-');
  const count = Count(value);
  incrementBtn.addEventListener('click', () => increment(10));
  decrementBtn.addEventListener('click', () => decrement(5));
  document.body.innerHTML = '';
  return document.body.append(incrementBtn, count, decrementBtn);
};

const mapStateToProps = (state) => ({ value: state });
const mapDispatchToProps = (dispatch) => ({
  increment: (payload) => dispatch(incAction(payload)),
  decrement: (payload) => dispatch(decAction(payload)),
});

connect(mapStateToProps, mapDispatchToProps)(App);
