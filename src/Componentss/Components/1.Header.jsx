import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[10%] border-2 border-black  flex p-2 bg-[#eaeaea]">
      <section className="w-1/2 flex justify-evenly items-center">
        <h1 className="text-[1.4rem] font-bold text-blue-900">
          Style Collection
        </h1>
        <select>
          {/* map */}
          <option value="">Jeans</option>
          <option value="">Jeans</option>
        </select>
        <select>
          {/* map */}
          <option value="">Shirt</option>
          <option value="">Jeans</option>
        </select>
        <select>
          {/* map */}
          <option value="">T-shirt</option>
          <option value="">Jeans</option>
        </select>
      </section>

      <section className="w-1/2 flex items-center justify-evenly">
        <input
          className="w-3/5 border-[1px] p-2 border-black text-[.9rem]"
          type="text"
          placeholder="Search by product, category or collection"
        />
        <p>Login</p>
        <Link to={"/Admin"}>
          <p>Admin</p>
        </Link>
      </section>
    </div>
  );
};
export default Header;
