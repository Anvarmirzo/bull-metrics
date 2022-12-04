import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface IState {
	login: {
		isVisible: boolean;
	};
	register: {
		isVisible: boolean;
	};
	order: {
		price: number;
		isVisible: boolean;
		typeId?: number;
		currentType: 'banner' | 'context' | 'chain';
	};
}

const initialState: IState = {
	login: {
		isVisible: false,
	},
	register: {
		isVisible: false,
	},
	order: {
		price: 0,
		isVisible: false,
		currentType: 'banner',
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
			action: PayloadAction<
				{name: keyof Omit<IState, 'order'>; isVisible: boolean} | {name: 'order'; data: IState['order']}
			>,
		) => {
			if (action.payload.name === 'order') {
				state.order = action.payload.data;
			} else {
				state[action.payload.name].isVisible = action.payload.isVisible;
			}
		},
	},
});
