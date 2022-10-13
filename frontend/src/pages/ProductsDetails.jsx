import React, { useEffect, useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import appContext from '../contexts/AppContext';
import { getProductbyId } from '../services/api/products';
import Header from '../components/Header';
import ButtonAddItem from '../components/ButtonAddItem';

function ProductsDetails() {
  const {
    setLoading, loading,
  } = useContext(appContext);
  const [product, setProduct] = useState({});
  const param = useParams();

  useEffect(() => {
    const getApiProductsDetails = async () => {
      setLoading(true);
      const data = await getProductbyId(param.id);
      setProduct(data[0]);
      setLoading(false);
    };
    getApiProductsDetails();
  }, []);

  return (
    <div className="ProductsDetails">
      <Header />
      { !loading && (
      <div className="prod">
        <img src={product.image} alt="Detalhe do produto" width="250px" />
        <div className="info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{`R$ ${product.price} ao ano`}</p>
        </div>
        <ButtonAddItem prod={product} />
        <Link to="/cart">Ver Carrinho</Link>
      </div>
      )}

    </div>
  );
}

export default ProductsDetails;
