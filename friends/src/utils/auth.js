import axios from 'axios';

export const axiosAuth = () => {
	const token = localStorage.getItem('token');
	// Return an instance of axios
	return axios.create({
		baseURL : 'http://localhost:5000',
		headers : {
			Authorization : token,
		},
	});
};