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
