import api from '../api';
import {IBannerType} from '../models';

export const BannerService = {
	getBannerTypes(params: {skip: number} = {skip: 0}) {
		return api.get<{count: number; data: IBannerType[]}>('banner/type', {params}).then((res) => res.data);
	},
};
