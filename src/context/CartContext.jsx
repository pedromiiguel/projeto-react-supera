import { useEffect, useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [freight, setFreight] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const valueFrete = cart.length * 10;
    setFreight(valueFrete);

    amount > 250 && setFreight(0);
  }, [amount, cart]);

  function handleAddProductToCart(product) {
    setCart([...cart, product]);
    setAmount(amount + product.price);
  }

  function handleRemoveProductToCart(product, productIndex) {
    setAmount(Math.round(amount - product.price));

    const newCart = cart.filter((cartItem, cartIndex) => {
      return cartIndex !== productIndex;
    });

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
