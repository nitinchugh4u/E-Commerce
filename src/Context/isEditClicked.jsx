import React, { createContext, useState } from "react";

const EditContext = createContext();

const  EditQuantityProductProvider =(props)=>{

    const [isEditClicked, setIsEditClicked] = useState(false);


    return(

        <EditContext.Provider  value={{ isEditClicked,setIsEditClicked  }} >
            {props.children}
        </EditContext.Provider> 
    )
} 
export {EditQuantityProductProvider,EditContext}


