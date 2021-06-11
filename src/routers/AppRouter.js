import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Notes from '../components/Notes';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Navbar} exact={true} />
        <Route path="/notes" component={Notes} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;