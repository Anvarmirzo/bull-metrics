import {createAsyncThunk} from '@reduxjs/toolkit';

import {ILogin, IPatchUser, ISignup} from '../../models';
import {AuthService} from '../../services';
import {loginAction, logoutAction, setUserAction} from './auth.slices';

export const signupThunk = createAsyncThunk(
	'auth/signup',
	async (payload: ISignup, thunkAPI) => {
		const data = await AuthService.signup(payload, thunkAPI.signal);

		if (data) {
			thunkAPI.dispatch(loginAction(data));
			return data;
		}
	},
	{
		dispatchConditionRejection: true,
	},
);

export const loginThunk = createAsyncThunk(
	'auth/login',
	async (payload: ILogin, thunkAPI) => {
		const data = await AuthService.login(payload, thunkAPI.signal);

		if (data) {
			thunkAPI.dispatch(loginAction(data));
			return data;
		}
	},
	{
		dispatchConditionRejection: true,
	},
);

export const logoutThunk = createAsyncThunk(
	'auth/logout',
	async (_, thunkAPI) => {
		const token = localStorage.getItem('jwt');

		if (token) {
			thunkAPI.dispatch(logoutAction());
			thunkAPI.dispatch(setUserAction(null));

			localStorage.removeItem('jwt');

			window.location.reload();
		}
	},
	{
		dispatchConditionRejection: true,
	},
);

export const autoLoginThunk = createAsyncThunk(
	'auth/autoLogin',
	async (_, thunkAPI) => {
		const token = localStorage.getItem('jwt');

		const data = await AuthService.getByToken(thunkAPI.signal);
		if (token && data) {
			thunkAPI.dispatch(loginAction(data));
		}
	},
	{
		dispatchConditionRejection: true,
	},
);

export const patchUserThunk = createAsyncThunk(
	'auth/patchUser',
	async (payload: {userId: number; params: IPatchUser}, thunkAPI) => {
		const data = await AuthService.patchUser(payload.userId, payload.params);

		if (data) {
			thunkAPI.dispatch(setUserAction(data));
		}
	},
);
