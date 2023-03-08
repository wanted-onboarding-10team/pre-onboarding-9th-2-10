import axios, { AxiosRequestConfig } from 'axios';

const option: AxiosRequestConfig = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
};
const client = axios.create(option);

export default client;
