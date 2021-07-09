import React, { useEffect, useState, createContext } from 'react';
import P from 'prop-types';

export const CartContext = createContext({});

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [freight, setFreight] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const valueFrete = cart.length * 10;
    setFreight(valueFrete);

    // eslint-disable-next-line no-unused-expressions
    amount > 250 && setFreight(0);
  }, [amount, cart]);

  function handleAddProductToCart(product) {
    setCart([...cart, product]);
    setAmount(amount + product.price);
  }

  function handleRemoveProductToCart(product, productIndex) {
    setAmount(Math.round(amount - product.price));

    const newCart = cart.filter((cartItem, cartIndex) => cartIndex !== productIndex);

    setCart(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        amount,
        freight,
        handleAddProductToCart,
        handleRemoveProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: P.node.isRequired,
};
