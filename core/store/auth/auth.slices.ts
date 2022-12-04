import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {};

export const {
	reducer: authReducer,
	actions: {logOutAction, logInAction},
} = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logInAction: (state, action: PayloadAction<typeof initialState>) => ({
			...state,
			...action.payload,
		}),

		logOutAction: (state: typeof initialState) => ({
			...state,
			// token: null,
			// user: null,
		}),
	},
});
