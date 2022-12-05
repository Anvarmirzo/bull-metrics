import api from '../api';
import {IContext, IContextPostParams, IContextType} from '../models';

export const ContextService = {
	getContextTypes(params: {skip: number} = {skip: 0}) {
		return api.get<{count: number; data: IContextType[]}>('context/type', {params}).then((res) => res.data);
	},
	post(params: IContextPostParams) {
		return api.post<IContext>('context', params).then((res) => res.data);
	},
	get() {
		return api.get<{data: IContext[]}>('context').then((res) => res.data);
	},
};
