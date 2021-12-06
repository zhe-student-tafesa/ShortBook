import styled from 'styled-components';

export const HomeWrapper= styled.div`
    overflow : hidden;//涉及到 左浮动  右浮动 需要让 父元素 的BFC 触发出来
    width: 960px;
    margin: 0 auto;
    //background: red;
`;

export const HomeLeft= styled.div`
    float : left;//涉及到 左浮动  右浮动  
    width: 625px;
    margin-left: 15px;
    padding-top: 30px;
    .banner-img{ //选中 HomeLeft组件里的 banner-img类
        width: 625px
    }

`;

export const HomeRight= styled.div`
    float : right;//涉及到 左浮动  右浮动  
    width: 240px;
   
`;

//topic 组件的 组件
export const TopicWrapper= styled.div`
    padding: 20px 0 10px 0;  
    overflow: hidden;     //父 元素 必须BFC
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

//TopicItem
export const TopicItem= styled.div`
    float: left; //子 元素 浮动
    margin-left:  18px;
    margin-bottom:  18px;
    height: 32px;
    line-height: 32px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid  #dcdcdc;
    border-radius: 4px;
    padding-right:10px;////////////
    .topic-pic{
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right:10px;////////////
    }
`;

//ListItem 
export const ListItem= styled.div`
    padding: 20px 0  ;  
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;//父元素
    .list_pic{
        display: block; //子元素
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo= styled.div`
    width: 500px;  
    float: left;;      
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc{
        line-height: 24px;
        font-size: 13px;
        //font-weight: bold;
        color: #999;
    }
`;