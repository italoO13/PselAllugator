import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonAddItem from '../ButtonAddItem/ButtonAddItem';
import './CardProduct.css';

function CardProduct({ prod }) {
  const {
    id, name, price, image, qtd,
  } = prod;

  return (
    <div key={id} className="cardProduct">

      <div className="cardProduct-info">
        <img src={image} alt={name} width="150px" />
        <h2>{name}</h2>
        <p>{`R$ ${price}`}</p>

      </div>
      <div className="cardProducts-actions">
        <Link to={`/product/${id}`}>
          Ver produto
        </Link>
        <ButtonAddItem prod={{
          id, name, price, qtdMax: qtd,
        }}
        />

      </div>
    </div>
  );
}

CardProduct.propTypes = {
  prod: PropTypes.objectOf.isRequired,
};

export default CardProduct;
