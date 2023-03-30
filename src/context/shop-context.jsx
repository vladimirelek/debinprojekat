import { createContext, useState } from "react";
import ITEMS from "../shop-data.json";
export const ShopContext = createContext({
  items: [],
  cartItems: [],
  setCartItems: () => null,
});
export const ShopProvider = ({ children }) => {
  const [items, setItems] = useState(ITEMS);
  const [cartItems, setCartItems] = useState([]);
  const value = { items, cartItems, setCartItems };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
