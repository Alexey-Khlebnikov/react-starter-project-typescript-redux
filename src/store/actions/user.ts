import {User} from '../../types/user';

export enum UserActionType {
	'SET_CURRENT_USER' = 'SET_CURRENT_USER'
}

export interface SetCurrentUser {
	type: UserActionType,
	currentUser: User
}

export type UserAction = SetCurrentUser