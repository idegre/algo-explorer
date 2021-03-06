import React from 'react'
import {
    Switch,
    Route,
		BrowserRouter
} from "react-router-dom";
import { Home } from './components/home';
import { Blocks } from './containers/blocks';
import { Transactions } from './containers/transactions';
import { Block } from './containers/block';
import { Navigation } from './components/navigation';

export const Router = () => <BrowserRouter>
	<Navigation>
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/blocks">
				<Blocks />
			</Route>
			<Route path="/block/:blockNumber">
				<Block />
			</Route>
			<Route path="/transactions">
				<Transactions />
			</Route>
		</Switch>
	</Navigation>
</BrowserRouter>
