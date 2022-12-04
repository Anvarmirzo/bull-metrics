import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
	login: {
		isVisible: false,
	},
	register: {
		isVisible: false,
	},
	order: {
		isVisible: false,
	},
};

export const {
	reducer: modalReducer,
	actions: {setIsVisibleModalAction},
} = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setIsVisibleModalAction: (
			state: typeof initialState,
			action: PayloadAction<{name: keyof typeof initialState; isVisible: boolean}>,
		) => {
			state[action.payload.name].isVisible = action.payload.isVisible;
		},
	},
});
