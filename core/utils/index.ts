import {AxiosError} from 'axios';
import {toast} from 'react-toastify';

export class Toast {
	static options = {delay: 1};

	static info = (info: string) => {
		toast.info(info, this.options);
	};

	static success = (message: string) => {
		toast.success(message, this.options);
	};

	static error = (error: AxiosError<{message?: string} | undefined>) => {
		if (error.message !== 'canceled') {
			let message = error.response?.data?.message || error.message || 'Server Side Error';
			if (Array.isArray(message)) {
				message = message.join(', ');
			}
			toast.error(message, this.options);
		}
	};

	static warning = (warning: string) => {
		toast.warn(warning, this.options);
	};
}

export const getURLFromFile = (file: File): Promise<string | ArrayBuffer> => {
	return new Promise((res, rej) => {
		const reader = new FileReader();
		reader.onload = (e) => {
			if (e.target && e.target.result) return res(e.target.result);
		};
		reader.onerror = (e) => rej(e);
		reader.readAsDataURL(file);
	});
};
