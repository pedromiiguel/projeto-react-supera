import './styles.scss';
import { Link } from 'react-router-dom'
import { Menu } from '../../components/Menu';

import DeleteIcon from '@material-ui/icons/Delete';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export function Cart() {

  const {hello} = useContext(CartContext)
  console.log(hello)
  const teste = {
    id: 312,
    name: 'Super Mario Odyssey',
    price: 197.88,
    score: 100,
    image: 'https://i.ibb.co/d42RgZ6/horizon-zero-dawn.png',
  };
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
          <div className="cart-item">
            <div className=" cart-item-header">
              <img src={teste.image} alt="" />
              <p>{teste.name}</p>
            </div>

            <p>1</p>
            <p>
              {teste.price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
            <button className="delete-button" title="Remover produto">
              <DeleteIcon className="delete-icon" />
            </button>
          </div>
          <div className="checkout-container">
            <Link to="/">Continuar comprando</Link >
            <div className="checkout">
              <p>Frete: R$ 40,00</p>
              <p>Subtotal: R$ 200,00</p>
              <p>Total: R$ 240,00</p>
              <button>Finalizar compra</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
