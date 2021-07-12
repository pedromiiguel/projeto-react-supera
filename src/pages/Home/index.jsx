import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import CardItem from '../../components/CardItem';
import ORDER_BY from '../../constants/orderBy';
import { api } from '../../services/api';

import './styles.scss';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState('name');
  const [orderedProducts, setOrderedProducts] = useState([]);

  useEffect(() => {
    api.get('/products').then((result) => setProducts(result.data));
  }, []);

  useEffect(() => {
    if (order === ORDER_BY.NAME) {
      const filteredProductsForname = products.sort((a, b) => a.name.localeCompare(b.name));

      setOrderedProducts([...filteredProductsForname]);
    }
    if (order === ORDER_BY.PRICE) {
      const filteredProductsForPrice = products.sort((a, b) => (a.price - b.price));

      setOrderedProducts([...filteredProductsForPrice]);
    }
    if (order === ORDER_BY.SCORE) {
      const filteredProductsForScore = products.sort((a, b) => (a.score - b.score));

      setOrderedProducts([...filteredProductsForScore]);
    }
  }, [products, order]);

  function handleOrder(event) {
    setOrder(event.target.value);
  }

  return (
    <div id="page-home">
      <header>
        <Menu />
      </header>
      <main>
        <section className="products-header">
          <h1>Produtos</h1>
          <div className="filter">
            <select onChange={handleOrder}>
              <option value="name">Ordem alfabética</option>
              <option value="price">Preço</option>
              <option value="score">Popularidade</option>
            </select>
          </div>
        </section>
        <div className="products">
          {orderedProducts.map((product) => (
            <CardItem key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
