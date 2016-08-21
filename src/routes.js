import React from 'react';
import { Route } from 'react-router';

import App from'./components/app';
import Dashboard from './componenets/dashboad';
import Orders from './componenes/orders';
import NotFound from './componenents/not_found';

const routes = (
  <Route path="/" component={App}>
    <Route path="dashboad" component={Dashboard} />
    <Route path="orders" component={Orders} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;