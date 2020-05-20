import {combineReducers} from 'redux';
import users from './users';

const reducers = combineReducers({
	users: users
});
export default reducers;

export type RootState = ReturnType<typeof reducers>