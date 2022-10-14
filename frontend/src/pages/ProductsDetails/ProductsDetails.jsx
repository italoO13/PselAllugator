import React, { useEffect, useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import appContext from '../../contexts/AppContext';
import { getProductbyId } from '../../services/api/products';
import Header from '../../components/Header/Header';
import ButtonAddItem from '../../components/ButtonAddItem/ButtonAddItem';
import './ProductsDetails.css';

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

  const {
    image, name, price, qtd, description, id,
  } = product;
  return (
    <div className="ProductsDetails">
      <Header />
      { !loading && (
      <div className="ProductsDetails-prod">
        <img src={image} alt="Detalhe do produto" width="250px" />
        <div className="ProductsDetails-prod-info">
          <h2>{name}</h2>
          <p>{description}</p>
          <p className="ProductsDetails-prod-price">{`R$ ${price} ao ano`}</p>
          <div className="actions-productsDetails">

            <ButtonAddItem prod={{
              id, name, price, qtdMax: qtd,
            }}
            />
            <Link to="/cart">Ver Carrinho</Link>

          </div>
        </div>
      </div>
      )}

    </div>

  );
}

export default ProductsDetails;
