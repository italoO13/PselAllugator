import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addLocalStoreCart, qtdMaxProdById } from '../services/api/localStore';

function CardProduct({ prod }) {
  const {
    id, name, price, image,
  } = prod;
  const [qtdProd, setQtdProd] = useState(qtdMaxProdById(id));

  return (
    <div key={id}>
      <img src={image} alt={name} width="150px" />
      <h2>{name}</h2>
      <p>{`R$ ${price}`}</p>
      <Link to={`/product/${id}`}>
        Ver produto
      </Link>
      <button
        type="button"
        disabled={qtdProd >= prod.qtd}
        onClick={() => {
          addLocalStoreCart(prod);
          setQtdProd(qtdProd + 1);
        }}
      >
        {qtdProd >= prod.qtd ? 'Estoque vazio' : 'adicionar'}

      </button>
    </div>
  );
}

CardProduct.propTypes = {
  prod: PropTypes.objectOf.isRequired,
};

export default CardProduct;
