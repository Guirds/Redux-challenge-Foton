import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Menu from '../pages/menu';
import Details from '../pages/details';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/menu" component={Menu} />
      <Route path="/menu/details" component={Details} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
