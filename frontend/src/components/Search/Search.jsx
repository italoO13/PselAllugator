import React, { useContext } from 'react';
import { getProducts } from '../../services/api/products';
import appContext from '../../contexts/AppContext';
import './search.css';

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
      <input type="text" placeholder="Pesquise por nome do produto" onChange={searchByName} />
    </div>
  );
}

export default Search;
