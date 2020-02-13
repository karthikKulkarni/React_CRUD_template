import React, { Component } from 'react';
import { createStore } from '../store';
import { Provider } from 'react-redux';
import './App.css';
import RootContainer from '../containers/RootContainer';

// create our Redux store
export const store = createStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <RootContainer />
        </Provider>
      </div>
    );
  }
}

export default App;
