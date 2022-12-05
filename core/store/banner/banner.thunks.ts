import {createAsyncThunk} from '@reduxjs/toolkit';

import {IBannerPostParams} from '../../models';
import {BannerService} from '../../services';
import {setBannersAction, setBannerTypesAction} from './banner.slices';

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
export const getBannersThunk = createAsyncThunk('banner/getAll', async (_, thunkAPI) => {
	const data = await BannerService.get();

	if (data) {
		thunkAPI.dispatch(setBannersAction(data.data));
	}
});
