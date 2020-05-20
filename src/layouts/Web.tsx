import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AuthRoute from '../components/AuthRoute';
import {UserRole} from '../types/user';
import Home from '../views/web/Home';
import Page404 from '../views/errors/Page404';
import Login from '../views/web/Login';

export default function () {
	return (
		<div>
			<Switch>
				<AuthRoute path="/auth" component={Home} role={UserRole.Admin} />
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route path="*" component={Page404} />
			</Switch>
		</div>
	);
}