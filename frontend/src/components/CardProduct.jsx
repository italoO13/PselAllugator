import React from 'react';
import PropTypes from 'prop-types';

function CardProduct({ prod }) {
  const { id, name, price } = prod;

  return (
    <div key={id}>
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
