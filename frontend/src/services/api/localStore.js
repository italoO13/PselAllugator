export const ReadLocalStoreCart = () => JSON.parse(localStorage.getItem('cart')) || [];

const cartNoProdSelected = (cart, id) => cart.filter((prod) => prod.id !== id);

const sortFunc = (a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
};

const setItemInCart = (newLocalStore) => {
  localStorage.setItem('cart', JSON.stringify([...newLocalStore].sort(sortFunc)));
};

export const addLocalStoreCart = ({
  id, name, price, qtd,
}) => {
  const localStorageAtual = ReadLocalStoreCart();
  const prod = localStorageAtual.find((obj) => obj.id === id);
  if (!prod) {
    return setItemInCart([...localStorageAtual, {
      id, name, price, qtd: 1, qtdMax: qtd,
    }]);
  }
  prod.qtd += 1;
  const newLocalStore = [...cartNoProdSelected(localStorageAtual, id), prod];
  return setItemInCart(newLocalStore);
};

export const removeProdLocalStoreCart = (id) => {
  const localStorageAtual = ReadLocalStoreCart();
  setItemInCart([...cartNoProdSelected(localStorageAtual, id)]);
};

export const removeItemLocalStoreCart = (id) => {
  const localStorageAtual = ReadLocalStoreCart();
  const prod = localStorageAtual.find((obj) => obj.id === id);

  if (prod.qtd - 1 === 0) {
    return removeProdLocalStoreCart(id);
  }
  prod.qtd -= 1;
  const newLocalStore = [...cartNoProdSelected(localStorageAtual, id), prod];
  return setItemInCart(newLocalStore);
};

export const qtdMaxProdById = (id) => {
  const prod = ReadLocalStoreCart().find((product) => product.id === id);
  if (!prod) {
    return 0;
  }
  return prod.qtd;
};
