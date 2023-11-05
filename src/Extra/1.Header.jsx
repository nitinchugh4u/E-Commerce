import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="bg-slate-300 flex justify-between " >
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-clothing-store-logo-design_23-2149577874.jpg?w=740&t=st=1698062035~exp=1698062635~hmac=980729a20683fdea6a12c5fe694908b4190a7c21239faf850deed5520f33db11"
          alt="" height="50px"  width ="50px"
        />

        <ul className="flex justify-between gap-10 " >
          <li>MEN</li>
          <li>About</li>
          <Link to={"/Admin"} >
            Admin
          </Link>
          
        </ul>

        <input className="border-2 border-black" type="text" placeholder="Search here"  />
      </div>
    </div>
  );
};
export default Header