import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './store.reducer';

function configureStoreProd() {
  const middlewares = [
    thunk,
  ];
  return createStore(
    reducers,
    compose(applyMiddleware(...middlewares))
  );
}

function configureStoreDev() {
  const middlewares = [
    thunk,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
