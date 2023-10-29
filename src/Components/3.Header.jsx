import React from "react";

export const Header = ()=>{
    
    
    
    return(

        <div>
         <div className="   text-white  flex items-center gap-10  ">
                
                <img className="w-24 rounded-lg "  src="https://img.freepik.com/free-vector/hand-drawn-clothing-store-logo-design_23-2149577874.jpg?w=740&t=st=1698062035~exp=1698062635~hmac=980729a20683fdea6a12c5fe694908b4190a7c21239faf850deed5520f33db11" alt="" />
                <ul>
                    <li className="bg-slate-300">MEN</li>
                </ul>
            </div>

            <div  >
                <input className="border-2  border-black" placeholder="Search" type="text" />

            </div> 
            

        </div>


    )



}
