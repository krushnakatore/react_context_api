import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [value, setValue] = useState(10);

  const addValue = () => {
    setValue(value + 1);
  };

  return (
    <CartContext.Provider value={{ value, addValue }}>
      {children}
    </CartContext.Provider>
  );
};
