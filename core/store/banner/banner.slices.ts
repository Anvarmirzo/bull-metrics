import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IBanner, IBannerType} from '../../models';

interface IState {
	types: {count: number; data: IBannerType[]};
	data: IBanner[];
}

const initialState: IState = {
	types: {
		count: 0,
		data: [],
	},
	data: [],
};

export const {
	reducer: bannerReducer,
	actions: {setBannerTypesAction, setBannersAction},
} = createSlice({
	name: 'banner',
	initialState,
	reducers: {
		setBannerTypesAction: (state, action: PayloadAction<IState['types']>) => {
			state.types = action.payload;
		},
		setBannersAction: (state, action: PayloadAction<IState['data']>) => {
			state.data = action.payload;
		},
	},
});
