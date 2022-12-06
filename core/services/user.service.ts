import api from '../api';

export const UserService = {
	getClicks() {
		return api.get('user/clicks');
	},
};
