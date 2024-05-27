// store.js

import { createStore, applyMiddleware } from 'redux';
import {thunk } from 'redux-thunk'; // Importing thunk without curly braces
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
