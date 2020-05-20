import axios from 'axios';

const Axios = axios.create({
	responseType: 'json'
});

Axios.interceptors.request.use(config => {
	config.headers.Authorization = localStorage.getItem('token');
	return config;
});