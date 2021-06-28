import { useEffect, useState } from 'react';
import { Menu } from '../../components/Menu';
import { CardItem } from '../../components/CardItem';


import { api } from '../../services/api';

import './styles.scss';

export function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products').then((result) => setProducts(result.data));
  }, []);
 

  return (
    <div id="page-home">
      <header>
        <Menu />
      </header>
      <main>
        <div className="products">
          {products.map((product) => (
            <CardItem key={product.id} product={product}/>
          ))}
            
        </div>
      </main>
    </div>
  );
}
