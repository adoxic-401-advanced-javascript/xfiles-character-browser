import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers/characterReducers';
import { promiseMiddleware } from 'promise-middleware-redux';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(promiseMiddleware)
  )
);

export default store;
