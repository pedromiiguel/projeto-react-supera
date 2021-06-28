import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import { convertCurrency } from '../../utils/convertCurrency';

import Rating from '@material-ui/lab/Rating';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import './styles.scss';

export function CardItem({ product }) {
  const { handleAddProductToCart } = useContext(CartContext);

  return (
    <div className="card" key={product.id}>
      <img src={product.image} alt={product.name} />
      <div className="card-info">
        <h4>{product.name}</h4>
        <p>{convertCurrency(product.price)}</p>

        <Rating
          readOnly
          name="hover-feedback"
          value={product.score / 100}
          precision={0.5}
        />
        <button
          title="Adicionar ao carrinho"
          onClick={() => {
            handleAddProductToCart(product);
          }}
        >
          <AddShoppingCartIcon className="cart-icon" />
        </button>
      </div>
    </div>
  );
}
