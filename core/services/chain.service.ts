import api from '../api';
import {IChain, IChainPostParams, IChainType} from '../models';

export const ChainService = {
	getChainTypes(params: {skip: number} = {skip: 0}) {
		return api.get<{data: IChainType[]}>('chain/type/active', {params}).then((res) => res.data);
	},
	post(params: IChainPostParams) {
		return api.post<IChain>('chain', params).then((res) => res.data);
	},
};
