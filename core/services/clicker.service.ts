import api from '../api';

interface IParams {
	ad: 'banner' | 'chain' | 'context';
	id: number;
}
export const ClickerService = {
	patch({ad, id}: IParams) {
		return api.patch(`${ad}/clicked/${id}`).then((res) => res.data);
	},

	saveClickedAd({ad, id}: IParams) {
		if (localStorage.key(999)) {
			localStorage.clear();
		}

		localStorage.setItem(`${ad}_${id}`, `${id}`);
	},

	findClickedAd({ad, id}: IParams) {
		return localStorage.getItem(`${ad}_${id}`);
	},
};
