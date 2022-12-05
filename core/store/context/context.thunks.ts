import {createAsyncThunk} from '@reduxjs/toolkit';

import {IContextPostParams} from '../../models';
import {ContextService} from '../../services';
import {setContextTypesAction} from './context.slices';

export const getContextTypesThunk = createAsyncThunk(
	'context/getContextTypes',
	async (params: {skip: number} | undefined, thunkAPI) => {
		const data = await ContextService.getContextTypes(params);

		if (data) {
			thunkAPI.dispatch(setContextTypesAction(data));
		}
	},
);

export const postContextThunk = createAsyncThunk('context/post', async (params: IContextPostParams, thunkAPI) => {
	const data = await ContextService.post(params);

	if (data) {
		return data;
	}
});
