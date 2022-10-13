import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addLocalStoreCart, qtdMaxProdById } from '../services/api/localStore';

function ButtonAddItem({ prod }) {
  const [qtdProd, setQtdProd] = useState(qtdMaxProdById(prod.id));
  return (
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
  );
}

ButtonAddItem.propTypes = {
  prod: PropTypes.objectOf.isRequired,
};

export default ButtonAddItem;
