import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AddButton from './containers/AddButton';
import ResetButton from './containers/ResetButton';
import Display from './containers/Display';
import counterApp from './store/reducers';
import logger from './middlewares/logger';

const store = createStore(
  counterApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    logger,
    thunk,
  ),
);

store.subscribe((...args) => {
  console.log('subscribe', 'context:', this, 'args: ', args);
});
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AddButton
            style={{
              display: 'block',
              margin: '20px auto',
            }}
            text="async + 1"
          />
          <ResetButton
            style={{
              display: 'block',
              margin: '20px auto',
            }}
            text="async reset"
          />
          <Display />
        </div>
      </Provider>
    );
  }
}

export default App;
