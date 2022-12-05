import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IChain, IChainType} from '../../models';

interface IState {
	types: {data: IChainType[]};
	data: IChain[];
}

const initialState: IState = {
	types: {
		data: [],
	},
	data: [],
};

export const {
	reducer: chainReducer,
	actions: {setChainTypesAction, setChainsAction},
} = createSlice({
	name: 'chain',
	initialState,
	reducers: {
		setChainTypesAction: (state, action: PayloadAction<IState['types']>) => {
			state.types = action.payload;
		},
		setChainsAction: (state, action: PayloadAction<IState['data']>) => {
			state.data = action.payload;
		},
	},
});
