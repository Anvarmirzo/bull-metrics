import api from '../api';

interface IParams {
	type: 'banner' | 'chain' | 'context';
	id: number;
}
export const ClickerService = {
	patch({type, id}: IParams) {
		return api.patch(`${type}/clicked/${id}`).then((res) => res.data);
	},

	saveClickedAd({type, id}: IParams) {
		const currentTypeJSON = localStorage.getItem(type);

		if (currentTypeJSON) {
			const currentTypeArr = JSON.parse(currentTypeJSON) as number[];

			if (currentTypeArr.length >= 1000) {
				localStorage.removeItem(type);
			}

			localStorage.setItem(type, JSON.stringify([...currentTypeArr, id]));
		} else {
			localStorage.setItem(type, JSON.stringify([id]));
		}
	},

	isAdClicked({type, id}: IParams) {
		const currentTypeJSON = localStorage.getItem(type);

		if (currentTypeJSON) {
			const currentTypeArr = JSON.parse(currentTypeJSON) as number[];

			return currentTypeArr.includes(id);
		}
	},
};
