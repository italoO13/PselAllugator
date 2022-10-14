/* eslint-disable import/prefer-default-export */
import api from '.';

export const getProducts = async (prod) => {
  let url = '/products';
  if (prod) {
    url = `${url}/search?name=${prod}`;
  }
  return api.get(url);
};

export const getProductbyId = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};
