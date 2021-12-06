//List 组件
import React, { Component } from 'react';
import { ListItem, ListInfo }  from '../style.js';

import   { connect } from 'react-redux';//与 store 连接

class List extends Component{ //没有 ()
    render(){
        return (
            <div>
            {this.props.list.map(
                (item)=>{ 
                    return(
                        <ListItem key= { item.get('id') }>
                            <img className='list_pic' src= {item.get('imgUrl')}  alt="mask"/>
                            <ListInfo>
                                <h3 className='title'>{item.get('title')}</h3>
                                <p className='desc'>{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    )
                }
            )}
 
            </div>
        );
    }
}
 
//mapState指的是从 store 拿数据
const mapState= (state)=> (//是一个 函数，返回 一个 对象
    {
        list: state.get('home').get('articleList')
    }
);

export default connect(mapState, null)(List);