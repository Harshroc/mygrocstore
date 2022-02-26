import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

// import { composeWithDevTools } from 'redux-devtools-extension';

const initalState = {};

// const composeEnhancer = compose(applyMiddleware(thunk),composeWithDevTools && composeWithDevTools());

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, initalState, composeEnhancers(applyMiddleware(thunk)));

export default store;