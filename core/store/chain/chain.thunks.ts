import {createAsyncThunk} from '@reduxjs/toolkit';

import {IChainPostParams} from '../../models';
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

export const postChainThunk = createAsyncThunk('chain/post', async (params: IChainPostParams, thunkAPI) => {
	const data = await ChainService.post(params);

	if (data) {
		return data;
	}
});
