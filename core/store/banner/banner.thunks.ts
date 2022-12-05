import {createAsyncThunk} from '@reduxjs/toolkit';

import {IBannerPostParams} from '../../models';
import {BannerService} from '../../services';
import {setBannerTypesAction} from './banner.slices';

export const getBannerTypesThunk = createAsyncThunk(
	'banner/getBannerTypes',
	async (params: {skip: number} | undefined, thunkAPI) => {
		const data = await BannerService.getBannerTypes(params);

		if (data) {
			thunkAPI.dispatch(setBannerTypesAction(data));
		}
	},
);

export const postBannerThunk = createAsyncThunk('banner/post', async (params: IBannerPostParams, thunkAPI) => {
	const data = await BannerService.post(params);
	if (data) {
		return data;
	}
});
