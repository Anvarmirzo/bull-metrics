import {createAsyncThunk} from '@reduxjs/toolkit';

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
