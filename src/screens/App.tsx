import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { createStore } from '../store';
import RootContainer from '../containers/RootContainer';

// create our Redux store
export const store = createStore();

const AppContainer = styled.div`
  text-align: center;
`;

const App = () => (
  <AppContainer className="App">
    <Provider store={store}>
      <RootContainer />
    </Provider>
  </AppContainer>
);

export default App;
