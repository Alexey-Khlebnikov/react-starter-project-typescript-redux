import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

import {Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ThemeProvider} from '@material-ui/styles';

import DefaultTheme from './themes/Default';

import history from './history';
import store from './store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={DefaultTheme}>
				<Router history={history}>
					<Switch>
						<Route path="/" component={App} />
					</Switch>
				</Router>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
