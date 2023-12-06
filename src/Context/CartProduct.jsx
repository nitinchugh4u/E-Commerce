import React, { createContext, useState } from "react";

const CartProductContext = createContext();

const CartProductProvider = (props) => {
  const [cart, setCart] = useState([]);

  return (
    <CartProductContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartProductContext.Provider>
  );
};
export { CartProductProvider, CartProductContext };
