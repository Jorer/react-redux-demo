import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';

import * as app from './reducers/AppReducer';

const middleware = [apiMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  app: app.default
});

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  // Note! Make sure this path matches your rootReducer import exactly
  // Does not play well with "NODE_PATH" aliasing.
  module.hot.accept('./reducers/AppReducer', () => {
    const newRootReducer = require('./reducers/AppReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
