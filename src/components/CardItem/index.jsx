import React from 'react';
import Rating from '@material-ui/lab/Rating';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import './styles.scss';


export function CardItem({ product }) {
  return (
    <div className="card" key={product.id}>
      <img src={product.image} alt={product.name} />
      <div className="card-info">
        <h4>{product.name}</h4>
        <p>
          {product.price.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>

        <Rating
          readOnly
          name="hover-feedback"
          value={product.score / 100}
          precision={0.5}
        />
        <button title="Adicionar ao carrinho">
          <span>
              <AddShoppingCartIcon className="cart-icon" />
          </span>
        </button>
      </div>
    </div>
  );
}
