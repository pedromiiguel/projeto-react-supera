import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import { convertCurrency } from '../../utils/convertCurrency';

import DeleteIcon from '@material-ui/icons/Delete';

import './styles.scss'
export function CartItem({ product, index }) {
  const { handleRemoveProductToCart } = useContext(CartContext);

  return (
    <div className="cart-item" >
      <div className=" cart-item-header">
        <img src={product.image} alt="" />
        <p>{product.name}</p>
      </div>

      <p>1</p>
      <p>{convertCurrency(product.price)}</p>
      <button
        className="delete-button"
        title="Remover produto"
        onClick={() => {
          handleRemoveProductToCart(product, index);
        }}
      >
        <DeleteIcon className="delete-icon" />
      </button>
    </div>
  );
}
