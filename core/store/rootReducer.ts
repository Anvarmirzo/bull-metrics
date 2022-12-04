import {
	ActionFromReducersMapObject,
	CombinedState,
	combineReducers,
	Reducer,
	StateFromReducersMapObject,
} from '@reduxjs/toolkit';

import {authReducer} from './auth/auth.slices';
import {modalReducer} from './modal/modal.slices';

const State = {
	auth: authReducer,
	modal: modalReducer,
};

export const appReducer = combineReducers(State);

export const rootReducer: Reducer<
	CombinedState<StateFromReducersMapObject<typeof State>>,
	ActionFromReducersMapObject<typeof State>
> = (state, action) => {
	if (action.type === 'global/logOut') {
		state = undefined;
	}

	return appReducer(state, action);
};
