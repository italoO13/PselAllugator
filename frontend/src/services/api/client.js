/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3005',
});

export const postCreateAccount = async (client) => {
  const response = await api.post('/clients', client);
  return response.data;
};

export const authAccount = async (client) => {
  const response = await api.post('/session', client);
  return response.data;
};
