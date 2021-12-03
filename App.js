import React,{ Component } from 'react';

import store  from './store/index.js';// 为了 使用 redux
import { Provider } from 'react-redux';///Provider 把 store 提供给 他的 子元素

//import {connect}  from 'react-redux';//使用connect 连接 store与 todolist
import  { GlobalStyle } from './style.js';   //导入GlobalStyle
import  { GlobalStyleIcon } from './statics/iconfont/iconfont.js';   //导入GlobalStyle  <GlobalStyleIcon/>
import Header  from './common/header/index.js';

class App extends Component{
  render(){
    return (
      <div className="App">
          <GlobalStyle/>
          <GlobalStyleIcon/>
          <Provider store = { store }>
            <Header/>
          </Provider>
      </div>
    );

  }
}


export default App;
