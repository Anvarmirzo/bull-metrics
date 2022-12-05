import {
	ActionFromReducersMapObject,
	CombinedState,
	combineReducers,
	Reducer,
	StateFromReducersMapObject,
} from '@reduxjs/toolkit';

import {authReducer} from './auth/auth.slices';
import {bannerReducer} from './banner/banner.slices';
import {chainReducer} from './chain/chain.slices';
import {contextReducer} from './context/context.slices';
import {fileUploadReducer} from './fileUpload/fileUpload.slices';
import {modalReducer} from './modal/modal.slices';

const State = {
	auth: authReducer,
	modal: modalReducer,
	banner: bannerReducer,
	chain: chainReducer,
	context: contextReducer,
	fileUpload: fileUploadReducer,
};

export const appReducer = combineReducers(State);

export const rootReducer: Reducer<
	CombinedState<StateFromReducersMapObject<typeof State>>,
	ActionFromReducersMapObject<typeof State>
> = (state, action) => {
	if (action.type === 'global/logOut') {
		state = undefined;
	}

	return appReducer(state, action);
};
