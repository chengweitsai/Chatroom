import React from 'react';
import { Route, Link, IndexRoute, Redirect } from 'react-router';
import ChatApp from './component/ChatApp';


export default (
  <Route path="/" component={ChatApp}>
    <IndexRoute component={Home} />
    <Route path="/about-us" component={AboutUs} />
    <Route path="/posts">
      <IndexRoute component={PostList} />
      <Route path=":postId" component={SinglePost} />
    </Route>
    <Redirect from="/abc" to="/" />
    <Route path="*" component={NotFound} />
  </Route>
);