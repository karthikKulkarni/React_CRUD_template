import React, { Component } from 'react';
import { createStore } from '../store';
import { Provider } from 'react-redux';
import RootContainer from '../containers/RootContainer';
import styled from 'styled-components';

// create our Redux store
export const store = createStore();

const AppContainer = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <AppContainer className="App">
        <Provider store={store}>
          <RootContainer />
        </Provider>
      </AppContainer>
    );
  }
}

export default App;
