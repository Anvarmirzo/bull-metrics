import {createAsyncThunk} from '@reduxjs/toolkit';

import {IContextPostParams} from '../../models';
import {ContextService} from '../../services';
import {setContextsAction, setContextTypesAction} from './context.slices';

export const getContextTypesThunk = createAsyncThunk(
	'context/getContextTypes',
	async (params: {skip: number} | undefined, thunkAPI) => {
		const data = await ContextService.getContextTypes(params);

		if (data) {
			thunkAPI.dispatch(setContextTypesAction(data));
		}
	},
);

export const postContextThunk = createAsyncThunk('context/post', async (params: IContextPostParams) => {
	const data = await ContextService.post(params);

	if (data) {
		return data;
	}
});

export const getContextsThunk = createAsyncThunk('context/getAll', async (_, thunkAPI) => {
	const data = await ContextService.get();

	if (data) {
		thunkAPI.dispatch(setContextsAction(data.data));
	}
});
