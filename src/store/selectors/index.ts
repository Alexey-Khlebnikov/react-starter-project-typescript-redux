import {RootState} from '../reducers';

export const selectCurrentUser = (state: RootState) => state.users.currentUser