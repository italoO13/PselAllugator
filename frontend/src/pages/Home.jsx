import React, { useEffect, useContext } from 'react';
import appContext from '../contexts/AppContext';
import { getProducts } from '../api/products';
import Header from '../components/Header';
import Search from '../components/Search';
import CardProduct from '../components/CardProduct';

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
              <CardProduct prod={prod} />
            ))}
          </div>
        )}

    </div>
  );
}

export default Home;
