/* eslint-disable import/prefer-default-export */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3005',
});

export const getProducts = async (prod) => {
  let url = '/products';
  if (prod) {
    url = `${url}/search?name=${prod}`;
  }
  return api.get(url);
};
