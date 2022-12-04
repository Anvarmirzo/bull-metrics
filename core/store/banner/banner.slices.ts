import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IBannerType} from '../../models';

interface IState {
	types: {count: number; data: IBannerType[]};
}

const initialState: IState = {
	types: {
		count: 0,
		data: [],
	},
};

export const {
	reducer: bannerReducer,
	actions: {setBannerTypesAction},
} = createSlice({
	name: 'banner',
	initialState,
	reducers: {
		setBannerTypesAction: (state, action: PayloadAction<IState['types']>) => {
			state.types = action.payload;
		},
	},
});
