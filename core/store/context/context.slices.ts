import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IContext, IContextType} from '../../models';

interface IState {
	types: {count: number; data: IContextType[]};
	data: IContext[];
}

const initialState: IState = {
	types: {
		count: 0,
		data: [],
	},
	data: [],
};

export const {
	reducer: contextReducer,
	actions: {setContextTypesAction, setContextsAction},
} = createSlice({
	name: 'context',
	initialState,
	reducers: {
		setContextTypesAction: (state, action: PayloadAction<IState['types']>) => {
			state.types = action.payload;
		},
		setContextsAction: (state, action: PayloadAction<IState['data']>) => {
			state.data = action.payload;
		},
	},
});
