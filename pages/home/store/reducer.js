///reducer.js
//import * as constants from './constants';

import { fromJS } from 'immutable';//immutable 给我们 提供了 fromJS方法
//fromJS功能：把js对象转成immutable 对象


//reducer.js
const defaultState = fromJS({ //list 保存 搜索AJAX数据
    topicList:[{
        id: 1,
        title: '社会热点',
        imgUrl: 'https://live-production.wcms.abc-cdn.net.au/1eba9cbcc5b937a863eeb639c6f366e4?impolicy=wcms_crop_resize&cropH=3333&cropW=5000&xPos=0&yPos=0&width=862&height=575'
        },{
        id: 2,
        title: '社会22',
        imgUrl: 'https://live-production.wcms.abc-cdn.net.au/1eba9cbcc5b937a863eeb639c6f366e4?impolicy=wcms_crop_resize&cropH=3333&cropW=5000&xPos=0&yPos=0&width=862&height=575'
        }
    ],
    articleList:[{
        id: 1,
        title: '胡歌12年后首谈车祸：既然活下来了，就不能白白活着',
        desc:'胡歌又刷屏了。近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：',
        imgUrl: 'https://live-production.wcms.abc-cdn.net.au/353c0fc5667b4cfcb08f299179f84722?impolicy=wcms_crop_resize&cropH=720&cropW=1280&xPos=0&yPos=100&width=862&height=485'
        },
        {
        id: 2,
        title: '1胡歌12年后首谈车祸：既然活下来了，就不能白白活着',
        desc:'胡歌又刷屏了。近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：',
        imgUrl: 'https://live-production.wcms.abc-cdn.net.au/353c0fc5667b4cfcb08f299179f84722?impolicy=wcms_crop_resize&cropH=720&cropW=1280&xPos=0&yPos=100&width=862&height=485'
        },
        {
        id: 3,
        title: '2胡歌12年后首谈车祸：既然活下来了，就不能白白活着',
        desc:'胡歌又刷屏了。近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：',
        imgUrl: 'https://live-production.wcms.abc-cdn.net.au/353c0fc5667b4cfcb08f299179f84722?impolicy=wcms_crop_resize&cropH=720&cropW=1280&xPos=0&yPos=100&width=862&height=485'
        },
        {
        id: 4,
        title: '3胡歌12年后首谈车祸：既然活下来了，就不能白白活着',
        desc:'胡歌又刷屏了。近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：',
        imgUrl: 'https://live-production.wcms.abc-cdn.net.au/353c0fc5667b4cfcb08f299179f84722?impolicy=wcms_crop_resize&cropH=720&cropW=1280&xPos=0&yPos=100&width=862&height=485'
        }

    ]

});

export default (state= defaultState, action)=>{//纯 函数
    //input_focus
 
    // //constants.CHANGE_PAGE
    // if(action.type=== constants.CHANGE_PAGE){// 
    //     return state.set('page', action.page);//action.page是新页码
    // }

    return state;
};

