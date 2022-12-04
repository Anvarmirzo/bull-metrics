import api from '../api';
import {IContextType} from '../models';

export const ContextService = {
	getContextTypes(params: {skip: number} = {skip: 0}) {
		return api.get<{count: number; data: IContextType[]}>('context/type', {params}).then((res) => res.data);
	},
};
