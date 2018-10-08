import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import AddButton from './containers/AddButton';
import ResetButton from './containers/ResetButton';
import Display from './containers/Display';
import counterApp from './store/reducers';
import logger from './middlewares/logger';

const store = createStore(
  counterApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger),
);

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
            text="+ 1"
          />
          <ResetButton
            style={{
              display: 'block',
              margin: '20px auto',
            }}
            text="重置"
          />
          <Display />
        </div>
      </Provider>
    );
  }
}

export default App;
