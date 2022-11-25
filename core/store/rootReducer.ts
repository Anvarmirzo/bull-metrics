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

// @ts-ignore
export const appReducer = combineReducers(State);

// @ts-ignore
export const rootReducer: Reducer<
	CombinedState<StateFromReducersMapObject<typeof State>>,
	ActionFromReducersMapObject<typeof State>
	> = (state, action) => {
	// @ts-ignore
	if (action.type === 'global/logOut') {
		state = undefined;
	}

	return appReducer(state, action);
};
