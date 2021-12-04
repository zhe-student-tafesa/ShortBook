import React  from 'react';

import  { connect } from 'react-redux';
//import  { GlobalStyleIcon } from '../../statics/iconfont/iconfont.js';   //导入GlobalStyleIcon <GlobalStyleIcon/>
//HeaderWrapper，

import { CSSTransition } from 'react-transition-group';

//导入 所有 内容
//import  * as actionCreators  from './store/actionCreators';
import    { actionCreators }  from './store/index.js';


import { HeaderWrapper,
         Logo,
         Nav,
         NavItem,
         NavSearch,
         Addition,
         Button,
         SearchWrapper
       }  from './style.js';

const Header= (props)=> {//变成 无状态 组件
    return (
        <HeaderWrapper>
            <Logo href='/' />
            <Nav>
                
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        timeout={200}
                        in={props.focused}
                        classNames='slide'
                    >
                        <NavSearch
                            className={ props.focused? 'focused' : ''}
                            onFocus={ props.handleInputFocus}
                            onBlur={ props.handleInputBlur}
                        />
                    </CSSTransition>
                    <span className={ props.focused? 'focused iconfont' : 'iconfont'} >&#xe637;</span>
                </SearchWrapper>
            </Nav>
            <Addition> 
                <Button className='writting'>
                    <span className="iconfont">&#xe708;</span>
                    写文章
                </Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    );
}







// class Header extends Component{
//     // constructor(props){
//     //     super(props);
//     //     // this.state={
            
//     //     // };
//     //     this.handleInputFocus=this.handleInputFocus.bind(this);
//     //     this.handleInputBlur= this.handleInputBlur.bind(this);
//     // }
//     render(){
//         return(
//             <HeaderWrapper>
//                 <Logo href='/' />
//                 <Nav>
                    
//                     <NavItem className='left active'>首页</NavItem>
//                     <NavItem className='left'>下载App</NavItem>
//                     <NavItem className='right'>登录</NavItem>
//                     <NavItem className='right'>
//                         <span className="iconfont">&#xe636;</span>
//                     </NavItem>
//                     <SearchWrapper>
//                         <CSSTransition
//                             timeout={200}
//                             in={this.props.focused}
//                             classNames='slide'
//                         >
//                             <NavSearch
//                                 className={this.props.focused? 'focused' : ''}
//                                 onFocus={this.props.handleInputFocus}
//                                 onBlur={this.props.handleInputBlur}
//                             />
//                         </CSSTransition>
//                         <span className={this.props.focused? 'focused iconfont' : 'iconfont'} >&#xe637;</span>
//                     </SearchWrapper>
//                 </Nav>
//                 <Addition> 
//                     <Button className='writting'>
//                         <span className="iconfont">&#xe708;</span>
//                         写文章
//                     </Button>
//                     <Button className='reg'>注册</Button>
//                 </Addition>
//             </HeaderWrapper>
//         );
//     }
//     // handleInputFocus(){
//     //     //console.log("haha");
//     //     this.setState({
//     //         focused : true
//     //     });
//     // }

//     // handleInputBlur(){
//     //     //console.log("haha");
//     //     this.setState({
//     //         focused : false
//     //     });
//     // }

// }

const mapStateToProps=(state)=>{//由于 拆分 reducer，导致多了一层header.
    return {
        focused : state.header.focused//把tate.focused 映射 到Props的 focused上

    };
};

const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputFocus(){
            //console.log('aaa');
            const action= actionCreators.searchFocus();
            dispatch(action);
        },

        handleInputBlur(){//input_blur
            const action= actionCreators.searchBlur();
            dispatch(action);
        }
        
    };
};

export default connect( mapStateToProps , mapDispatchToProps)(Header);