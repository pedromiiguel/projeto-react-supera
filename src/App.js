import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'


import './styles/global.scss'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/cart" component={Cart}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
