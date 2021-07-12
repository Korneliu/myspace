import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Notes from '../components/Notes/Notes';
import SelfImpNotes from '../components/SelfImpNotes';
import MySpaceDashboard from '../components/MySpaceDashboard';
import NotFoundPage from '../components/NotFoundPage';
import AddNotePage from '../components/Notes/AddNotePage';
import EditNotePage from '../components/Notes/EditNotePage';
import QuotesIdeas from '../components/QuotesIdeas/QuotesIdeas';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={MySpaceDashboard} exact={true} />
        <Route path="/notes" component={Notes} />
        <Route path="/selfimpnotes" component={SelfImpNotes} />
        <Route path="/createnote" component={AddNotePage} />
        <Route path="/editnote/:id" component={EditNotePage} />
        <Route path="/quotesideas" component={QuotesIdeas} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;


