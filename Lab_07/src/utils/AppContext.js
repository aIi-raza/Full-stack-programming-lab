import React, { createContext, useState, useEffect } from 'react';
import { CartStore } from './db';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const updateCart = () => {
    setCartCount(CartStore.count());
  };

  useEffect(() => {
    updateCart();
  }, []);

  return (
    <AppContext.Provider value={{ cartCount, updateCart }}>
      {children}
    </AppContext.Provider>
  );
};
