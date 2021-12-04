//index.js
import {createStore, compose } from 'redux';

import reducer from './reducer';//    ./代表 当前目录

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store= createStore(reducer, composeEnhancers() );

export default store;