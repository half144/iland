import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([])
  const [counter, setCounter] = useState(0)
  const [total, setTotal] = useState(0)

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product])
    setCounter(prev => ++prev)
    setTotal(prev => prev + Number(product.price))
  }

  return (
    <CartContext.Provider value={{ isOpenCart, setIsOpenCart, cartItems, addToCart, counter, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
