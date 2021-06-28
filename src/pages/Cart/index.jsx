import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

import { Link } from 'react-router-dom';
import { Menu } from '../../components/Menu';
import { CartItem } from '../../components/CartItem'

import { convertCurrency } from '../../utils/convertCurrency';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './styles.scss';


export function Cart() {
  const { cart, amount, freight } = useContext(CartContext);
  
  return (
    <div id="page-cart">
      <header>
        <Menu />
      </header>
      <main>
        <h1>Carrinho de compras</h1>
        <div className="cart-items">
          <div className="cart-title">
            <p>Produto</p>
            <p>Quantidade</p>
            <p>Preço</p>
            <p>Remover</p>
          </div>
          {cart.map((product, index) => (
            <CartItem product={product} index={index} key={product.id}/>
          ))}

          <div className="checkout-container">
            <Link to="/"> <span><ArrowBackIcon/></span> Continuar comprando</Link>
            <div className="checkout">
              <p>Frete: {convertCurrency(freight)}</p>
              <p>Subtotal: {convertCurrency(amount)}</p>
              <p>Total: {convertCurrency(freight + amount)}</p>
              <button>Finalizar compra</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
