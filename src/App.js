import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { CartProvider } from './context/CartContext';

import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <CartProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </CartProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
