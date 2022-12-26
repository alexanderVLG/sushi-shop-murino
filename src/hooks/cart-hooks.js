import React, {createContext, useContext, useState} from "react";
import {data} from '../data'

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider ({children}) {
  const [items, setItems] = useState(data)
  return (
    <CartContext.Provider value={{items}}>
      {children}
    </CartContext.Provider>
  )
}