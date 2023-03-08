import axios from 'axios';

const client = axios.create({
  baseURL: '/data/mock_data.json',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

export default client;
