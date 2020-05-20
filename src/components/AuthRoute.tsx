import React, {FunctionComponent, Component, useEffect, useState} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {UserRole} from '../types/user';
import {selectCurrentUser} from '../store/selectors';
import Page403 from '../views/errors/Page403';

interface Props {
	path: string,
	component: FunctionComponent | typeof Component,
	role: UserRole | UserRole[]
}

export default function AuthRoute(props: Props) {
	const {path, component, role} = props;
	const currentUser = useSelector(selectCurrentUser);
	const [authorized, setAuthorization] = useState(false);
	const [roles, setRoles] = useState<UserRole[]>([]);

	useEffect(() => {
		 setAuthorization(currentUser !== undefined && roles.indexOf(currentUser!.role) !== -1)
	}, [currentUser, roles]);

	useEffect(() => {
		!role ? setRoles([]) : Array.isArray(role) ? setRoles(role) : setRoles([role]);
	}, [role]);

	return (
		currentUser ?
			(
				authorized ?
				<Route path={path} component={component} />
				: <Route path="" component={Page403} from={path} />
			)
			: <Redirect to="/login" from={path} />
	);
}