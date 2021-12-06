import React, { Component } from 'react';

import List  from './components/List.js';
import  Recommend  from './components/Recommend.js';
import Topic  from './components/Topic.js';
import Writer  from './components/Writer.js';

import { HomeWrapper,
         HomeLeft,
         HomeRight 
} from './style.js'

class Home extends Component{ //没有 ()
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>  
                    <img className= 'banner-img' src="https://learn.tafesa.edu.au/pluginfile.php/895153/theme_snap/coverimage/1598248446/course-image.jpg" alt="flo"/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        );
    }
}
export default Home;
