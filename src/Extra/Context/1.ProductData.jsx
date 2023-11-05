import { createContext, useState } from "react";
import { useActionData } from "react-router-dom";

const ProductContext = createContext();

const ProductProvider = (props) => {
  const [arr, setArr] = useState([]);
  return (
    <ProductContext.Provider value={{ arr, setArr }}>
    
      {props.children}
    </ProductContext.Provider>
  );
};
export {ProductProvider,ProductContext}