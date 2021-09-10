import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Notes from '../components/Notes/Notes';
import MySpaceDashboard from '../components/MySpaceDashboard';
import NotFoundPage from '../components/NotFoundPage';
import AddNotePage from '../components/Notes/AddNotePage';
import AddIdeaPage from '../components/QuotesIdeas/AddIdeaPage';
import AddQuotePage from '../components/QuotesIdeas/AddQuotePage';
import EditNotePage from '../components/Notes/EditNotePage';
import QuotesIdeas from '../components/QuotesIdeas/QuotesIdeas';
import Games from '../components/Games/Games';
import Code from '../components/Code/Code';
import LoginPage from '../components/LoginPage';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/myspacedashboard" component={MySpaceDashboard} />
        <Route path="/notes" component={Notes} />
        <Route path="/createnote" component={AddNotePage} />
        <Route path="/createidea" component={AddIdeaPage} />
        <Route path="/createquote" component={AddQuotePage} />
        <Route path="/editnote/:id" component={EditNotePage} />
        <Route path="/quotesideas" component={QuotesIdeas} />
        <Route path="/games" component={Games} />
        <Route path="/code" component={Code} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;


