import React from 'react'
import {
    Switch,
    Route,
		BrowserRouter
} from "react-router-dom";
import { Home } from './components/home';
import { Blocks } from './containers/blocks';
import { Transactions } from './containers/transactions';

export const Router = () => <BrowserRouter>
	<Switch>
    <Route exact path="/">
      <Home />
    </Route>
		<Route path="/blocks">
			<Blocks />
    </Route>
		<Route path="/block/:blockNumber">
    </Route>
		<Route path="/transactions">
			<Transactions />
    </Route>
	</Switch>
</BrowserRouter>
