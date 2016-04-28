import React from 'react';
import { Route, Link, IndexRoute, Redirect } from 'react-router';
import Home from './components/Home' 
import ChatApp from './components/ChatApp';
import NotFound from './components/NotFound';
import UserProfile from './components/UserProfile';


export default (
  <Route path="/">
   <IndexRoute component={Home} /> // child under "/"
   <Route path="chat" component={ChatApp}/>

   
   <Route path="users/:username" component={UserProfile}/>
   
    /* 到最後都沒有 match 出現 404 畫面 */
   <Route path="*" component={NotFound}/>
  </Route>
  
);