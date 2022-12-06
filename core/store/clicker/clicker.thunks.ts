import {createAsyncThunk} from '@reduxjs/toolkit';

import {ClickerService} from '../../services';

export const clickerPatchThunk = createAsyncThunk(
	'clicker/patch',
	async (payload: {type: 'banner' | 'chain' | 'context'; id: number}, thunkAPI) => {
		const isClicked = ClickerService.isAdClicked(payload);

		if (!isClicked) {
			const data = await ClickerService.patch(payload);

			if (data) {
				ClickerService.saveClickedAd(payload);
			}
		}
	},
);
