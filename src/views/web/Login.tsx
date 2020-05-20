import React from 'react';
import {DefaultProps} from '../../types/global';

interface LoginProps extends DefaultProps {
	path?: string
}

export default function Login(props: LoginProps) {
	const {path} = props;
	return (
		<div>Please Login {path}</div>
	);
}
