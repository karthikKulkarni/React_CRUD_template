import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../screens/Landing/LandingPage';
import DetailedPostPage from '../screens/DetailedPost/DetailedPostPage';
import AddPostPage from '../screens/AddPost/AddPostPage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/detailedPost" component={DetailedPostPage} />
      <Route path="/addPost" component={AddPostPage} />
      {/* Default route */}
      <Route component={LandingPage} />
    </Switch>
  );
}
