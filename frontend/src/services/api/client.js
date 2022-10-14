/* eslint-disable import/prefer-default-export */
import api from '.';

export const postCreateAccount = async (client) => {
  const response = await api.post('/clients', client);
  return response.data;
};

export const authAccount = async (client) => {
  const response = await api.post('/session', client);
  return response.data;
};

export const getClientById = async () => {
  const response = await api.get('/clients');
  return response.data;
};
