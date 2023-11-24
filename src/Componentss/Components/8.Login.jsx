import React from "react";

export const Login = () => {
  return (
    <div className="bg-slate-400  ">
        <div className="  p-28 flex-col items-center flex  ">
      <h1 className="bg-orange-500 p-2">Login Page</h1>

      <h1 className=" p-2">Log in/Sign up</h1>

      <input 
        className="bg-grey border-2 p-2 border-black w-80"
        placeholder="Enter Mobile Number"
        type="text"
      />
      <br />

      <button className="bg-cyan-600   p-2 border-black ">CONTINUE</button>

      <h1 className="p-2">OR</h1>

      <button className="bg-gray-300   p-2  border-black">CONTINUE WITH EMAIL</button>
      <br />
      <button className="bg-rose-300  p-2 border-black">GOOGLE</button>
      <br />
      <button className="bg-orange-500  p-2 border-black ">FACEBOOK</button>
      </div>

    </div>
  );
};
