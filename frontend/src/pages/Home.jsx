import React, { useEffect, useContext } from 'react';
import appContext from '../contexts/AppContext';
import { getProducts } from '../api/products';
import Header from '../components/Header';
import Search from '../components/Search';

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

  return (
    <div className="home">
      <Header />
      <Search />

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
