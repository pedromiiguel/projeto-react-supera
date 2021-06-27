import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home'

import './styles/global.scss'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
