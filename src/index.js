import React from 'react';
import { render } from 'react-dom';
import ChatApp from './components/ChatApp';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

//import './chatroom.css';

import './reset.css'
import './style.css'

// 把Router render 到畫面上
render (
	<Router history={browserHistory} routes={routes}/>
	document.getElementById('root')
);