import api from '../api';
import {IChainType} from '../models';

export const ChainService = {
	getChainTypes(params: {skip: number} = {skip: 0}) {
		return api.get<{data: IChainType[]}>('chain/type/active', {params}).then((res) => res.data);
	},
};
