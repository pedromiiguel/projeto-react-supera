import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import CardItem from '../../components/CardItem';

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
    if (order === 'name') {
      const filteredProductsForname = products.sort((a, b) => (a.name < b.name ? -1 : 1));

      setOrderedProducts([...filteredProductsForname]);
    }
    if (order === 'price') {
      const filteredProductsForPrice = products.sort((a, b) => (a.price < b.price ? -1 : 1));

      setOrderedProducts([...filteredProductsForPrice]);
    }
    if (order === 'score') {
      const filteredProductsForScore = products.sort((a, b) => (a.score < b.score ? -1 : 1));

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
