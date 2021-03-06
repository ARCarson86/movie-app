import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieLists from './components/MovieLists';
import MovieListsNew from './components/MovieListsNew';
import MovieListsEdit from './components/MovieListsEdit';
import MovieList from './components/MovieList';
import MovieNew from './components/MovieNew';
import MovieEdit from './components/MovieEdit';

const AppRouter = (props) => (
  <BrowserRouter>
  	<div>
  		<Switch>
	      <Route path='/' exact component={MovieLists} />
        <Route path='/movielists/new' exact component={MovieListsNew} />
        <Route path='/movielists/:id/edit' exact component={MovieListsEdit} />
        <Route path='/movielists/:id' exact component={MovieList} />
        <Route path='/movielists/:list_id/movies/new' exact component={MovieNew} />
        <Route path='/movielists/:list_id/movies/:id/edit' exact component={MovieEdit} />
	    </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
