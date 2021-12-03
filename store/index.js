//index.js
import {createStore} from 'redux';

import reducer from './reducer';//    ./代表 当前目录
const store= createStore(reducer);

export default store;