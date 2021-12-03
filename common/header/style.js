//style.js
import styled from 'styled-components';
import logoPic from '../../statics/logo.png';


//创建一个组件 HeaderWrapper， 本质上这里是一个div
export const HeaderWrapper = styled.div`
    //父组件相对定位，下部a组件是子组件，使用绝对到位
    position:relative;
    height:56px;
    border-bottom: 1px solid #f0f0f0;//下 边框
`;

//创建一个组件 Logo， 本质上这里是一个a标签
export const Logo = styled.a`
    position:absolute;
    top:0;
    left:0;
    display: block;//内联 转成 块 元素
    width: 100px;

    height:56px;
    background: url(${logoPic});//多行文本 嵌套 变量的语法 
    background-size: contain;
`;
//
//创建一个组件 HeaderWrapper， 本质上这里是一个div
export const Nav = styled.div`
    width: 960px;
    padding-right: 70px;
    box-sizing: border-box;
    height: 100%;
    margin: 0 auto;//左右居中
    ///background: green;

`;
//创建一个组件 HeaderWrapper， 本质上这里是一个div,是NavItem，且有left类时：向左浮动
//是NavItem，且有right类时：向右浮动
//active类 ea6f5a
//4行 共有属性   padding: 上下0 左右15px;
export const NavItem = styled.div`
    line-height: 56px;//  共有属性
    padding: 0 15px;
    font-size: 17px;
    color: #333; //  共有属性


    &.left {float:left; }
    &.right {float:right;  color: #969696; }
    &.active {color: #ea6f5a; }
`;

//创建一个组件 NavSearch 本质上这里是一个input
export const NavSearch = styled.input.attrs({
    placeholder:'search'
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;//上 右 下 左
    margin-top: 9px;
    box-sizing: border-box;//这样 20的padding就不会把 box撑大
    border: none;
    outline: none;
    border-radius: 19px;
    background:#eee;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused{
        width: 250px;
    }


    &.slide-enter{
       width:160px;
       transition: all 0.2s  ease-out;
    }
    &.slide-enter-active {
       width:250px;  
    }
    &.slide-exit{
       
       transition: all 0.2s  ease-out;
    }
    &.slide-exit-active {
       width:160px;  
    }

    ///background: green;

`;

//创建一个组件 Addition， 本质上这里是一个div,悬浮 在 右上角
export const Addition = styled.div`
     
    position:absolute;
    right:0;
    top: 0px;
    height: 56px;
`;
//创建一个组件 Button， 本质上这里是一个button
export const Button = styled.button`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    font-size: 14px; 
    border: 1px solid #ec6149; //writting
    &.reg{ color : #ec6149;}
    &.writting{ color : #fff;
                background:#ec6149;
              }
`;

//创建一个组件 SearchWrapper  本质上这里是一个div
export const SearchWrapper = styled.div`
     
     float: left;
     // .slide-enter{
     //    width:160px;
     //    transition: all 0.2s  ease-out;
     // }
     // .slide-enter-active {
     //    width:250px;  
     // }
     // .slide-exit{
        
     //    transition: all 0.2s  ease-out;
     // }
     // .slide-exit-active {
     //    width:160px;  
     // }
     position:relative;
     .iconfont{
        position: absolute;
        right: 5px;
        bottom:5px;
        width: 30px;
        line-height: 30px;
        border-radius:15px;
        //background:green;
        text-align:center;
        &.focused{
            background : #777;
            color : #fff;
        }
     }
`;