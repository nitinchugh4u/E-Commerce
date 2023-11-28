
import React, { createContext, useContext, useState } from "react";
import { ProductContext } from "./1.ProductData";


const SetArrProductContext = createContext();

const SetArrProductProvider= (props)=>{

    const { arr} = useContext(ProductContext);



    const [fill, setFill] = useState([...arr]);

return(
    <SetArrProductContext.Provider  value={{ fill,setFill  }} >
        {props.children}
</SetArrProductContext.Provider>

)
}
export {SetArrProductProvider,SetArrProductContext}


