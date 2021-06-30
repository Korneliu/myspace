import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Notes from '../components/Notes';
import MySpaceDashboard from '../components/MySpaceDashboard';
import NotFoundPage from '../components/NotFoundPage';
import SelfImpNotes from '../components/SelfImpNotes';
import AddNotePage from '../components/AddNotePage';
import EditNotePage from '../components/EditNotePage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={MySpaceDashboard} exact={true} />
        <Route path="/notes" component={Notes} />
        <Route path="/createnote" component={AddNotePage} />
        <Route path="/selfimpnotes" component={SelfImpNotes} />
        <Route path="/editnote/:id" component={EditNotePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;


// 