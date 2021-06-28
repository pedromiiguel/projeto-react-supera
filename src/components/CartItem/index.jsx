import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import { convertCurrency } from '../../utils/convertCurrency';

import DeleteIcon from '@material-ui/icons/Delete';

import './styles.scss';
export function CartItem({ product, index }) {
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
