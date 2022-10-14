/* eslint-disable import/prefer-default-export */
import api from '.';

export const postCreateSubscription = async (id, qtd) => {
  const arr = new Array(Number(qtd)).fill(id);
  arr.forEach((idAr) => api.post('/subscription', { productId: idAr }));
};
