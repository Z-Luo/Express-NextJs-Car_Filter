import request, { baseURL } from '@/utils/request';

interface CarQueryParams {
    make?: string;
    model?: string;
    year?: string;
    description?: string;
    odometer?: string;
    condition?: string;
    location?: string;
    category?: string;
    isSalvage?: boolean;
    saleDate?: string;
    sortByDate?: string;
  }

 const fetchCars = (queryParams:CarQueryParams) => {
	return request({
		baseURL,
		method: 'GET',
		url: '/car',
        params: queryParams
	});
};

export default fetchCars;