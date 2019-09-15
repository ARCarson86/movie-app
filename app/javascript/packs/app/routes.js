import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieLists from './components/MovieLists';
import MovieListsNew from './components/MovieListsNew';

const AppRouter = (props) => (
  <BrowserRouter>
  	<div>
  		<Switch>
	      <Route path='/' exact component={MovieLists} />
        <Route path='/movielists/new' exact component={MovieListsNew} />
	    </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
