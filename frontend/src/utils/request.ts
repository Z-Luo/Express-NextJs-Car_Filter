import axios, { AxiosRequestConfig } from 'axios';
import { DEVELOPMENT_API_URL } from '@/constants/apiUrl';


interface IRequest {
	method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH';
	url: string;
}
export const baseURL = DEVELOPMENT_API_URL;
const timeout = 30000;

const axiosInstance = axios.create({
	baseURL,
	timeout
});

export default function request(options: AxiosRequestConfig & IRequest) {
	return axiosInstance({
		...options
	})
		.then(response => response)
		.catch(error => error);
}
