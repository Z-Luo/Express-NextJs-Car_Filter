import request, { baseURL } from '@/utils/request';

export const fetchCars = () => {
	return request({
		baseURL,
		method: 'GET',
		url: '/car'
	});
};

export default fetchCars;
