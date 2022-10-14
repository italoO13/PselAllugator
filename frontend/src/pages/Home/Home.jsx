import React, { useEffect, useContext } from 'react';
import appContext from '../../contexts/AppContext';
import { getProducts } from '../../services/api/products';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import CardProduct from '../../components/CardProduct/CardProduct';
import './Home.css';

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
      <div className="home-wrapper">

        {loading
          ? <p className="home-loading">Carregando...</p>
          : (
            <div className="home-cards">
              {products.map((prod) => (
                <CardProduct key={prod.id} prod={prod} />
              ))}
            </div>
          )}

      </div>

    </div>
  );
}

export default Home;
