export default store => next => action => {
  console.group('logger:', action.type)
  console.info('logger dispatching:', action)
  const result = next(action);
  console.log('logger next state', store.getState())
  console.log('logger result:', result);
  console.groupEnd('logger:', action.type)
  return result
}
