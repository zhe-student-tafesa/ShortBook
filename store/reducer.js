import { combineReducers } from 'redux-immutable';
import {reducer as headerReducer } from '../common/header/store/index.js' ;//别名是headerReducer
//import   homeReducer from '../pages/home/store/reducer.js' ;//  引入 方法1
import {reducer as homeReducer } from '../pages/home/store/index.js' ;//  引入 方法2，index是总出口

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer
});

export default reducer;