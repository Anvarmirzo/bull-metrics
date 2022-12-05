import {createAsyncThunk} from '@reduxjs/toolkit';

import {FileService} from '../../services';
import {setFileUploadAction} from './fileUpload.slices';

export const fileUploadThunk = createAsyncThunk('fileUpload', async (payload: FormData, thunkAPI) => {
	const data = await FileService.uploadMany(payload);

	if (data) {
		thunkAPI.dispatch(setFileUploadAction(data));
		return data;
	}
});
