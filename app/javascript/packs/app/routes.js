import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieLists from './components/MovieLists';
import MovieListsNew from './components/MovieListsNew';
import MovieListsEdit from './components/MovieListsEdit';

const AppRouter = (props) => (
  <BrowserRouter>
  	<div>
  		<Switch>
	      <Route path='/' exact component={MovieLists} />
        <Route path='/movielists/new' exact component={MovieListsNew} />
        <Route path='/movielists/:id/edit' exact component={MovieListsEdit} />
	    </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
