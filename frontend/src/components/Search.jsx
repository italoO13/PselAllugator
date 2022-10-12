import React, { useContext } from 'react';
import { getProducts } from '../api/products';
import appContext from '../contexts/AppContext';

function Search() {
  const {
    setProducts, setLoading,
  } = useContext(appContext);

  const searchByName = async ({ target }) => {
    setLoading(true);
    const response = await getProducts(target.value);
    setProducts(response.data);
    setLoading(false);
  };
  return (
    <div className="search">
      <input type="text" onChange={searchByName} />
    </div>
  );
}

export default Search;
