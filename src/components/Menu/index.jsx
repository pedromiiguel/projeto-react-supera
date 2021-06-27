import './styles.scss';
import LogoImg from '../../assets/controle-de-video-game.png';
import CartImg from '../../assets/cart-icon.svg';
import { Link } from 'react-router-dom';
export function Menu() {
  return (
    <nav className="menu">
      <div>
        <Link href="/">
          <img src={LogoImg} alt="Logo" />
          Well Played
        </Link>
      </div>

      <Link href="/cart">
        <img src={CartImg} alt="Logo" />
        <div className="cart-items">
          <span>0</span>
        </div>
      </Link>
    </nav>
  );
}
