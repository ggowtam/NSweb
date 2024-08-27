import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  // Load cart from local storage
  useEffect(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  // Save cart to local storage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        return prevItems;
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const removeItemFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateItemQuantity = (id, delta) => {
    setCartItems(prevItems => {
      const updatedItems = [...prevItems];
      const index = updatedItems.findIndex(item => item.id === id);
      if (index > -1) {
        const newQuantity = updatedItems[index].quantity + delta;
        if (newQuantity <= 0) {
          updatedItems.splice(index, 1);
        } else {
          updatedItems[index].quantity = newQuantity;
        }
        return updatedItems;
      }
      return prevItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, updateItemQuantity, isCartOpen, setCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
