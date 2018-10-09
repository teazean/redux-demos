export const ADD_COUNTER = 'ADD_COUNTER';
export const RESET_CONUNTER = 'RESET_CONUNTER';

export function addCounter(step) {
  console.log('action creator:', 'addCounter');
  return {
    type: ADD_COUNTER,
    step,
  };
}

export function resetCounter() {
  console.log('action creator:', 'resetCounter');
  return {
    type: RESET_CONUNTER,
  };
}

export function asyncAddCounter(step) {
  console.log('action creator:', 'asyncAddCounter');
  return (dispatch, getState) => {
    console.log('function action executor:', 'asyncAddCounter');
    setTimeout(() => dispatch(addCounter(step)), 2000);
  }
}

export function asyncResetCounter(step) {
  console.log('action creator:', 'asyncResetCounter');
  return (dispatch, getState) => {
    console.log('function action executor:', 'asyncResetCounter');
    setTimeout(() => dispatch(resetCounter()), 2000);
  }
}
