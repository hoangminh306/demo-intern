import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from "react-redux";
import RootReducer from './reducers/index';
import thunk from "redux-thunk";
import RouterIndex from './routers/RouterIndex';
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

const store = createStore(RootReducer, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <RouterIndex />
    </Provider>
    ,
    document.getElementById('root'));

serviceWorker.unregister();
