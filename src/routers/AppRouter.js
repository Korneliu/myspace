import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Notes from '../components/Notes';
import Code from '../components/Code';
import MySpaceDashboard from '../components/MySpaceDashboard';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={MySpaceDashboard} exact={true} />
        <Route path="/notes" component={Notes} />
        <Route path="/code" component={Code} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;