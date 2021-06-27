import React, { useState } from 'react';
import './styles.scss';

import IconButton from '@material-ui/core/IconButton';


import Rating from '@material-ui/lab/Rating';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
export function CardItem({ product }) {
  const [value, setValue] = useState(3);
  const [hover, setHover] = useState(-1);
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
