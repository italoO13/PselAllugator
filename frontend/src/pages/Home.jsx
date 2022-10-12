import React, { useEffect, useContext } from 'react';
import appContext from '../contexts/AppContext';
import { getProducts } from '../api/products';

function Home() {
  const {
    setProducts, products, setLoading, loading,
  } = useContext(appContext);

  useEffect(() => {
    const getApiProducts = async () => {
      setLoading(true);
      const response = await getProducts();
      setProducts(response.data);
      setLoading(false);
    };
    getApiProducts();
  }, []);

  const searchByName = async ({ target }) => {
    setLoading(true);
    const response = await getProducts(target.value);
    setProducts(response.data);
    setLoading(false);
  };

  return (
    <div className="home">
      <div className="header">header</div>
      <div className="search">
        <input type="text" onChange={searchByName} />
      </div>

      {loading
        ? <p>Carregando...</p>
        : (
          <div className="cards">
            {products.map((prod) => (
              <div key={prod.id}>
                <h2>{prod.name}</h2>
                <p>{`R$ ${prod.price}`}</p>
                <button type="button">Ver produto</button>
                <button type="button">Adicionar</button>
              </div>
            ))}
          </div>
        )}

    </div>
  );
}

export default Home;
