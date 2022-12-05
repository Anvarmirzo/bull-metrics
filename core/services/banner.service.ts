import api from '../api';
import {IBanner, IBannerPostParams, IBannerType} from '../models';

export const BannerService = {
	getBannerTypes(params: {skip: number} = {skip: 0}) {
		return api.get<{count: number; data: IBannerType[]}>('banner/type', {params}).then((res) => res.data);
	},
	post(params: IBannerPostParams) {
		return api.post<IBanner>('banner', params).then((res) => res.data);
	},
	get() {
		return api.get<{data: IBanner[]}>('banner').then((res) => res.data);
	},
};
