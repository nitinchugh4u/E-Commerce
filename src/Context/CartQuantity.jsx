import React, { createContext, useState } from "react";

const QuantityProductContext = createContext();

const  QuantityProductProvider =(props)=>{

    const [Quantity,setQuantity] = useState(1);

    return(

        <QuantityProductContext.Provider  value={{ Quantity,setQuantity  }} >
            {props.children}
        </QuantityProductContext.Provider> 
    )
} 
export {QuantityProductProvider,QuantityProductContext}


