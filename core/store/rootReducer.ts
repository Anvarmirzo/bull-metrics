import {
	ActionFromReducersMapObject,
	CombinedState,
	combineReducers,
	Reducer,
	StateFromReducersMapObject,
} from '@reduxjs/toolkit';

const State = {
	auth: {},
	globalUI: {},
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const appReducer = combineReducers(State);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const rootReducer: Reducer<
	CombinedState<StateFromReducersMapObject<typeof State>>,
	ActionFromReducersMapObject<typeof State>
> = (state, action) => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	if (action.type === 'global/logOut') {
		state = undefined;
	}

	return appReducer(state, action);
};
