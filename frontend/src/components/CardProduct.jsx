import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonAddItem from './ButtonAddItem';

function CardProduct({ prod }) {
  const {
    id, name, price, image,
  } = prod;

  return (
    <div key={id}>
      <img src={image} alt={name} width="150px" />
      <h2>{name}</h2>
      <p>{`R$ ${price}`}</p>
      <Link to={`/product/${id}`}>
        Ver produto
      </Link>
      <ButtonAddItem prod={prod} />
    </div>
  );
}

CardProduct.propTypes = {
  prod: PropTypes.objectOf.isRequired,
};

export default CardProduct;
