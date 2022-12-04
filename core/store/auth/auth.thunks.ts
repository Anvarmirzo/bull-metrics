import {createAsyncThunk} from '@reduxjs/toolkit';

import {ILogin} from '../../models';
import {AuthService} from '../../services';
import {logInAction} from './auth.slices';

export const loginThunk = createAsyncThunk(
	'auth/login',
	async (payload: ILogin, thunkAPI) => {
		const data = await AuthService.login(payload, thunkAPI.signal);

		if (data) {
			thunkAPI.dispatch(logInAction(data));

			return data;
		}
	},
	{
		dispatchConditionRejection: true,
	},
);
