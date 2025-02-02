import React, { createContext, useState, useContext } from 'react';

// Create CartContext
const CartContext = createContext();

// Create a provider to wrap around your app
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add item to the cart and increments if the item already exists
  const addToCart = (product) => {
    const existingProduct=cart.find((item)=>item.id===product.id)
    if(existingProduct){
      const updatedCart=cart.map((item)=>
        item.id===product.id?
        {...item,quantity:item.quantity+1}:
        item
      ) 
      setCart(updatedCart);
    }
    else{
      setCart((prevCart) => [...prevCart, {...product,quantity:1}]);
    }
  };
// reduce the quantity of the item in the cart
 const reduceQuantity=(product)=>{
  const updatedCart=cart.map((item)=> {
    if(item.quantity>0 && item.id===product.id)
      return {...item,quantity:item.quantity-1}
    else
      return item
  })
  setCart(updatedCart);
 }
  // Remove item from the cart is completely removes the item from the cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart ,reduceQuantity}}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use CartContext in other components
export function useCart() {
  return useContext(CartContext);
}
