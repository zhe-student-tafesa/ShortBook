import { combineReducers } from 'redux';
import {reducer as headerReducer} from '../common/header/store/index.js' ;//别名是headerReducer

const reducer = combineReducers({
    header: headerReducer
});

export default reducer;