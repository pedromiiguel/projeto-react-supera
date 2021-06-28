import { createContext } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const hello = "hello world";

  return <CartContext.Provider value={{hello}}>{children}</CartContext.Provider>;
};
