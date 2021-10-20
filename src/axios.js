// Reusable axios call with the baseUrl and headers set
import axios from 'axios';

const instance = axios.create({
	baseURL: `${process.env.VUE_APP_API_URL}`,
	crossdomain: true,
	headers: {
		'Access-Control-Allow-Origin': '*',
	}
});

export default instance;