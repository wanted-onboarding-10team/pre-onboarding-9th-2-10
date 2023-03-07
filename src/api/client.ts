import axios, { AxiosRequestConfig } from 'axios';

/* Axios 설정 */

const option: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
};
const client = axios.create(option);

export default client;
