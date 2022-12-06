import {createAsyncThunk} from '@reduxjs/toolkit';

import {ClickerService} from '../../services';

export const clickerPatchThunk = createAsyncThunk(
	'clicker/patch',
	async (payload: {ad: 'banner' | 'chain' | 'context'; id: number}, thunkAPI) => {
		const ad = ClickerService.findClickedAd(payload);
		console.log(ad);
		if (!ad) {
			const data = await ClickerService.patch(payload);

			if (data) {
				await ClickerService.saveClickedAd(payload);
			}
		}
	},
);
