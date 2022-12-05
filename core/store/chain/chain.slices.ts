import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IChainType} from '../../models';

interface IState {
	types: {data: IChainType[]};
}

const initialState: IState = {
	types: {
		data: [],
	},
};

export const {
	reducer: chainReducer,
	actions: {setChainTypesAction},
} = createSlice({
	name: 'chain',
	initialState,
	reducers: {
		setChainTypesAction: (state, action: PayloadAction<IState['types']>) => {
			state.types = action.payload;
		},
	},
});
