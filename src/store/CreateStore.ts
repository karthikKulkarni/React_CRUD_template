import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

export default (rootReducer: any, rootSaga: any) => {
  /* ------------- Redux Configuration ------------- */
  const middleware = [];
  const enhancers = [];

  /* ------------- Saga Middleware ------------- */
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware));

  /* ------------- compose with Redux Devtool ------------- */
  const composeEnhancers = composeWithDevTools || compose;

  const store = createStore(rootReducer, composeEnhancers(...enhancers));

  sagaMiddleware.run(rootSaga);

  return store;
};
