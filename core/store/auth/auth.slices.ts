import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IUser} from '../../models';

interface IState {
	jwt: string | null;
	user: null | IUser;
}
const initialState: IState = {
	jwt: null,
	user: null,
};

export const {
	reducer: authReducer,
	actions: {logoutAction, loginAction, setUserAction},
} = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		signupAction: (state: IState, action: PayloadAction<IState>) => {
			state = action.payload;
		},
		loginAction: (state: IState, action: PayloadAction<IState>) => {
			state.user = action.payload.user;
			state.jwt = action.payload.jwt;
		},
		logoutAction: (state: IState) => {
			state.jwt = null;
			state.user = null;
		},
		setUserAction: (state: IState, action: PayloadAction<IUser | null>) => {
			state.user = action.payload;
		},
	},
});
