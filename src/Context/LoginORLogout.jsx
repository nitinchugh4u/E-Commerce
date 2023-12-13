import React, { createContext, useState } from "react";

const LogInContext = createContext();

const  LoginProductProvider =(props)=>{

    const [isLogin, setIsLogin] = useState(false);


    return(

        <LogInContext.Provider  value={{ isLogin, setIsLogin }} >
            {props.children}
        </LogInContext.Provider> 
    )
} 
export {LoginProductProvider,LogInContext }


