import React from 'react';
import PropTypes from 'prop-types';

function CardProduct({ prod }) {
  const {
    id, name, price, image,
  } = prod;

  return (
    <div key={id}>
      <img src={image} alt={name} width="150px" />
      <h2>{name}</h2>
      <p>{`R$ ${price}`}</p>
      <button type="button">Ver produto</button>
      <button type="button">Adicionar</button>
    </div>
  );
}

CardProduct.propTypes = {
  prod: PropTypes.objectOf.isRequired,
};

export default CardProduct;
