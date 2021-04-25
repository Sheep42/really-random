import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
    
	baseURL: 'https://api.random.org/json-rpc/4/invoke'
    
});

export default instance;