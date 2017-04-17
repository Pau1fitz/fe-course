import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Lesson from './Lesson';
import './index.css';

import customData from './data.json';

import { Router, Route, browserHistory } from 'react-router'


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
        <Route path="intro" component={Lesson} sideBarItems={customData.introduction.sideBarItems} information={customData.introduction.information} />
        <Route path="lesson-one" component={Lesson} sideBarItems={customData.lessonOne.sideBarItems} information={customData.lessonOne.information} />
        <Route path="lesson-two" component={Lesson} sideBarItems={customData.lessonTwo.sideBarItems} information={customData.lessonTwo.information} />
    </Router>,

  document.getElementById('root')
);
