import {createAsyncThunk} from '@reduxjs/toolkit';

import {ChainService} from '../../services';
import {setChainTypesAction} from './chain.slices';

export const getChainTypesThunk = createAsyncThunk(
	'chain/getChainTypes',
	async (params: {skip: number} | undefined, thunkAPI) => {
		const data = await ChainService.getChainTypes(params);

		if (data) {
			thunkAPI.dispatch(setChainTypesAction(data));
		}
	},
);
