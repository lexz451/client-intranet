import Axios from 'axios';

const API_URL = 'http://localhost:8000/api';

class BaseService {
	constructor() {
		Axios.defaults.baseURL = document.location.origin;
		Axios.interceptors.request.use((config => {
			const user = JSON.parse(localStorage.getItem('user'));
			if (user && user.token) {
				config.headers['AUTHENTICATION'] = `Bearer ${user.token}`;
			}
			return config;
		}));
	}

	get(resource) {
		return Axios.get(resource);
	}

	post(resource, data) {
		return Axios.post(resource, data);
	}
}

export default BaseService;