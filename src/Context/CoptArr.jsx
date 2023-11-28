
import React, { createContext, useContext, useState } from "react";
import { ProductContext } from "./1.ProductData";


const CopyArrProductContext = createContext();

const CopyArrProductProvider= (props)=>{

    const { arr} = useContext(ProductContext);



    const [arrCopy, setCopy] = useState([...arr]);

return(
    <CopyArrProductContext.Provider  value={{ arrCopy,setCopy  }} >
        {props.children}
</CopyArrProductContext.Provider>

)
}
export {CopyArrProductProvider,CopyArrProductContext}


