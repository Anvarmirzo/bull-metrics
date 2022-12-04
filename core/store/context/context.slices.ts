import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IContextType} from '../../models';

interface IState {
	types: {count: number; data: IContextType[]};
}

const initialState: IState = {
	types: {
		count: 0,
		data: [],
	},
};

export const {
	reducer: contextReducer,
	actions: {setContextTypesAction},
} = createSlice({
	name: 'context',
	initialState,
	reducers: {
		setContextTypesAction: (state, action: PayloadAction<IState['types']>) => {
			state.types = action.payload;
		},
	},
});
