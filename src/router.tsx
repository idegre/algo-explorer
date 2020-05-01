import React from 'react'
import {
    Switch,
    Route,
		BrowserRouter
} from "react-router-dom";
import { Home } from './components/home';

export const Router = () => <BrowserRouter>
	<Switch>
    <Route path="/">
        <Home />
    </Route>
	</Switch>
</BrowserRouter>
