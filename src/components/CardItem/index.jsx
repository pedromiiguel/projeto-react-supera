import React, { useContext } from 'react';
import Rating from '@material-ui/lab/Rating';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import P from 'prop-types';
import { CartContext } from '../../context/CartContext';
import convertCurrency from '../../utils/convertCurrency';

import './styles.scss';

export default function CardItem({ product }) {
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
          type="button"
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

CardItem.defaultProps = {
  product: [],
};

CardItem.propTypes = {
  product: P.arrayOf(
    P.shape({
      name: P.string.isRequired,
      image: P.string.isRequired,
      price: P.number.isRequired,
    }),
  ),
};
