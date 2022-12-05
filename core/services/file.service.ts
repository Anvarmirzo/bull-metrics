import api from '../api';
import {IFileUpload} from '../models';

export const FileService = {
	uploadMany(formData: FormData) {
		return api
			.post<IFileUpload[]>('/file/upload-many', formData, {
				headers: {
					'Content-Type': 'multipart/form-data; boundary=something',
				},
			})
			.then((res) => res.data);
	},
};
