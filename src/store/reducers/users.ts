import {User} from '../../types/user';
import {UserActionType, UserAction} from '../actions/user';

export interface UserState {
	currentUser?: User
}

const initState: UserState = {
	currentUser: undefined
};

export default (state: UserState = initState, action: UserAction) => {
	switch (action.type) {
		case UserActionType.SET_CURRENT_USER:
			return {...state, currentUser: action.currentUser}
		default: return state;
	}
}