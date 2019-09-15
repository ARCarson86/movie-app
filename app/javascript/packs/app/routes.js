import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TestPage from './components/TestPage';

const AppRouter = (props) => (
  <BrowserRouter>
  	<div>
  		<Switch>

	      <Route path='/' component={TestPage} />
	    </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
