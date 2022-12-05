import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IFileUpload} from '../../models';

interface IState {
	file: IFileUpload[] | null;
}

const initialState: IState = {
	file: null,
};

export const {
	reducer: fileUploadReducer,
	actions: {setFileUploadAction},
} = createSlice({
	name: 'fileUpload',
	initialState,
	reducers: {
		setFileUploadAction: (state: IState, action: PayloadAction<IState['file']>) => {
			state.file = action.payload;
		},
	},
});
