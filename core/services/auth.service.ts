import api from '../api';
import {ILogin} from '../models';
import {Toast} from '../utils';

export const AuthService = {
	login(params: ILogin, signal?: AbortSignal) {
		return api
			.post('auth/login', params, {signal})
			.then((res) => {
				// localStorage.setItem('jwt', res.data.jwt || '');
				return res;
			})
			.catch(Toast.error);
	},
};
