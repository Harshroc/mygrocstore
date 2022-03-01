import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

// import { composeWithDevTools } from 'redux-devtools-extension';

//,composeWithDevTools?.()

const initalState = {};

const composeEnhancer = compose(applyMiddleware(thunk));

const store = createStore(rootReducer, initalState, composeEnhancer );

export default store;