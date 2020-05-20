import {createBrowserHistory} from 'history';

const history = createBrowserHistory({});

history.listen(location => {
	if (location.pathname) {

	}
});

export default history;