import api from '../api';
import {IAuthResponse, ILogin, IPatchUser, ISignup, IUser} from '../models';
import {store} from '../store';
import {logoutThunk} from '../store/auth/auth.thunks';
import {Toast} from '../utils';

export const AuthService = {
	signup(params: ISignup, signal?: AbortSignal) {
		return api.post<IAuthResponse>('auth/regis', params, {signal}).then((res) => {
			Toast.success('Вы успешно зарегистрировались');
			localStorage.setItem('jwt', res.data.jwt || '');
			return res.data;
		});
	},

	login(params: ILogin, signal?: AbortSignal) {
		return api.post('auth/login', params, {signal}).then((res) => {
			Toast.success('Вы успешно вошли в свой аккаунт');
			localStorage.setItem('jwt', res.data.jwt || '');
			return res.data;
		});
	},

	getByToken(signal?: AbortSignal) {
		return api
			.get<IUser>('user/token', {signal})
			.then((res) => {
				const jwt = localStorage.getItem('jwt');
				return {user: res.data, jwt};
			})
			.catch((e) => {
				if (e.response?.status === 404) {
					store.dispatch(logoutThunk());
				}
				Toast.error(e);
			});
	},

	patchUser(userId: number, params: IPatchUser) {
		return api.patch<IUser>(`user/${userId}`, params).then((res) => {
			Toast.success('Персональные данные обновлены');
			return res.data;
		});
	},
};
