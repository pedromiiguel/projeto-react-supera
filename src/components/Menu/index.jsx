import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/controle-de-video-game.png';
import CartImg from '../../assets/cart-icon.svg';
import { CartContext } from '../../context/CartContext';

import './styles.scss';

export default function Menu() {
  const { cart } = useContext(CartContext);
  return (
    <nav className="menu">
      <div>
        <Link to="/">
          <img src={LogoImg} alt="Logo" />
          Well Played
        </Link>
      </div>

      <Link to="/cart">
        <img src={CartImg} alt="Logo" />
        <div className="cart-items">
          <span>{cart.length}</span>
        </div>
      </Link>
    </nav>
  );
}
