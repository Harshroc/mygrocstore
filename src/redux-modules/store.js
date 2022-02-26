import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

const initalState = {};

const composeEnhancer = compose(applyMiddleware(thunk),composeWithDevTools?.());

const store = createStore(rootReducer, initalState, composeEnhancer );

export default store;