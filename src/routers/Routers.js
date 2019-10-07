import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from '../layout/Index';
import NewsDetail from '../layout/NewsDetail';
import Homepage from '../layout/Homepage';
import { index, detail, homePage } from '../routes/Routes';

const Routers = () => (
  <BrowserRouter>
    <Switch>
      <Route path={index} component={Index} />
      <Route path={detail} component={NewsDetail} />
      <Route path={homePage} component={Homepage} />
    </Switch>
  </BrowserRouter>
);

export default Routers;