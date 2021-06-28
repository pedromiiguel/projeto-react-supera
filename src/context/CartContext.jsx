import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function handleAddProductToCart(product) {
    setCart([...cart, product]);
    console.log(cart);
  }

  function handleRemoveProductToCart(productIndex) {
    const newCart = cart.filter((cartItem, cartIndex) => {
      return cartIndex !== productIndex;
    });

    setCart(newCart)
  }

  return (
    <CartContext.Provider value={{ cart, handleAddProductToCart,handleRemoveProductToCart }}>
      {children}
    </CartContext.Provider>
  );
};
