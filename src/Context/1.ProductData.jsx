import { createContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = (props) => {
  const [arr, setArr] = useState([]);
  return (
    <ProductContext.Provider value={{ arr, setArr }}>
      {props.children}
    </ProductContext.Provider>
  );
};
export { ProductProvider, ProductContext };