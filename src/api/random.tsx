import axios, { AxiosRequestConfig } from 'axios';
import { API_KEY } from '../utils/secrets';

const instance = axios.create({
    
	baseURL: 'https://api.random.org/json-rpc/4/invoke'
    
});

export const roll = async ( min: Number, max: Number, dice: Number ) => {

	let id = Math.floor(Math.random() * 999999) + 1;

	return await instance.post( '', {

		jsonrpc: "2.0",
		method: "generateIntegers",
		params: {
			"apiKey": API_KEY ,
			"n": dice,
			"min": min,
			"max": max,
			"replacement": true,
			"base": 10,
			"pregeneratedRandomization": null
		},
		id: id,

	});

};