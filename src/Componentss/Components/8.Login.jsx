



import React from "react";
import { Link } from "react-router-dom";

export const Login = ()=>{

  return(
    <div className="flex h-screen w-full justify-center gap-2   bg-slate-400 ">

      <div className="  w-4/5   rounded-md flex flex-col  justify-center items-center px-6  bg-slate-200 ">
        <h1 className="  font-bold  p-4 text-2xl">Welcome to the world of Style Collection !</h1>
        <img className="rounded-full  " src="https://wallpapercave.com/wp/wp1877585.jpg" alt="" />

        


      </div>
      
      


      <div className=" bg-slate-300 rounded-md      flex flex-col justify-center items-center  ">

      <h1 className=" p-2 text-xl font-bold   ">Log in / Sign up</h1>
      <h3 className="font-serif p-2 mt-2   text-gray-700">for Latest trends, exciting offers and everything Style Collection®!</h3>

      
      <input className="border-black border-2 rounded-md mt-2 " type="text " placeholder="Enter Mobile Number" />

      
      <div className=" flex flex-col justify-center items-center gap-2 p-2 mt-2 ">

      <Link to= "/SignUp"> <button className="bg-white   text-gray-700 rounded-md p-2" >CONTINUE</button>
</Link>
      {/* <button className="bg-white rounded-md p-2" >CONTINUE</button> */}

      <span className="text-gray-500">OR</span>

        <button className=" bg-white text-gray-700 rounded-md p-2 mt-2.5  ">CONTINUE WITH EMAIL</button>
        <button className= "bg-white text-gray-700 rounded-md p-2 w-52 mt-2.5 " >GOOGLE </button>
        
        <button className="bg-white text-gray-700 rounded-md p-2 w-52 mt-2.5" >FACEBOOK</button>
        </div>
        

      

      


      </div>




    </div>
  )


}



















