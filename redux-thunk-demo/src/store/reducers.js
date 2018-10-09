import { combineReducers } from 'redux';
import {
  ADD_COUNTER,
  RESET_CONUNTER,
} from './actions';

function counter(counter, action) {
  console.log('reducer:', 'counter', 'action type:', action.type);
  switch(action.type) {
    case ADD_COUNTER:
      return counter + action.step;
    case RESET_CONUNTER:
      return 0;
    default:
      return 0;
  }
}

function test(test, action) {
  console.log('reducer:', 'test');
  return null;
}

export default combineReducers({
  counter,
  test,
});
