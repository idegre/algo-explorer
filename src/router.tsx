import React from 'react'
import {
    Switch,
    Route,
		BrowserRouter
} from "react-router-dom";
import { Home } from './components/home';

export const Router = () => <BrowserRouter>
	<Switch>
    <Route exact path="/">
        <Home />
    </Route>
		<Route path="/blocks">
    </Route>
		<Route path="/block/:blockNumber">
    </Route>
		<Route path="/transactions">
    </Route>
	</Switch>
</BrowserRouter>
