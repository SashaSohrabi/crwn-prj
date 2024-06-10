import { USER_ACTION_TYPES } from './user.types';
import { UserData } from '../../utils/firebase/firebase.utils';
import { ActionWithPayload, createAction } from '../../utils/reducer/reducer.utils';

export type UserAction = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, UserData>

export const setCurrentUser = (user: UserData): UserAction =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
