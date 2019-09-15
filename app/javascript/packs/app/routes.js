import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieLists from './components/MovieLists';

const AppRouter = (props) => (
  <BrowserRouter>
  	<div>
  		<Switch>

	      <Route path='/' component={MovieLists} />
	    </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
