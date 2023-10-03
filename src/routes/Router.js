// routes/Router.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/profile" component={ProfilePage} />
      {/* ... outras rotas */}
    </Switch>
  </BrowserRouter>
);

export default Router;
