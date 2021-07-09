import React, { useContext } from 'react';
import P from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import { CartContext } from '../../context/CartContext';
import convertCurrency from '../../utils/convertCurrency';

import './styles.scss';

export default function CartItem({ product = [], index }) {
  const { handleRemoveProductToCart } = useContext(CartContext);

  return (
    <tr>
      <th className="cart-item-header">
        <img src={product.image} alt={product.name} />
        {product.name}
      </th>
      <th>1</th>
      <th>{convertCurrency(product.price)}</th>
      <th>
        <button
          type="button"
          className="delete-button"
          title="Remover produto"
          onClick={() => {
            handleRemoveProductToCart(product, index);
          }}
        >
          <DeleteIcon className="delete-icon" />
        </button>
      </th>
    </tr>
  );
}

CartItem.defaultProps = {
  product: [],
};

CartItem.propTypes = {
  product: P.arrayOf(
    P.shape({
      name: P.string.isRequired,
      image: P.string.isRequired,
      price: P.number.isRequired,
    }),
  ),
  index: P.string.isRequired,
};
