///reducer.js
import * as constants from './constants';

//reducer.js
const defaultState = {
    focused : false

};

export default (state= defaultState, action)=>{//纯 函数
    //input_focus
    if(action.type=== constants.SEARCH_FOCUS){
        const newState=JSON.parse(JSON.stringify(state));
        newState.focused=true;
        return newState; 
    }
    if(action.type=== constants.SEARCH_BLUR){
        const newState=JSON.parse(JSON.stringify(state));
        newState.focused=false;
        return newState;
    }

    return state;
};

