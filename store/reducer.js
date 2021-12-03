//reducer.js
const defaultState = {
    focused : false

};

export default (state= defaultState, action)=>{//纯 函数
    //input_focus
    if(action.type==='input_focus'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.focused=true;
        return newState;
    }
    if(action.type==='input_blur'){
        const newState=JSON.parse(JSON.stringify(state));
        newState.focused=false;
        return newState;
    }

    return state;
};

