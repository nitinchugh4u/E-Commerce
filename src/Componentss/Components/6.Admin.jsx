import React, { useContext, useState } from "react";
import Table from "./5.Table";
import { Link, Outlet } from "react-router-dom";
import { ProductContext } from "../../Context/1.ProductData";

export const Admin = () => {
  const { arr } = useContext(ProductContext);
 
  

  console.log(arr);
  return (
    <div className=" h-screen bg-slate-400 flex">
      <section className="w-1/5 bg-[#eaeaea] h-full"></section>
      <section className="w-4/5 h-full">
        <header className="border-2 border-black p-1 flex items-center justify-end px-5  ">
          <Link
            to={"/Admin/Form"}
            className="border-2 border-black p-2 bg-yellow-500"
          >
            Add Product
          </Link>
        </header>
        <Table />

        <Outlet />
      </section>
    </div>
  );
};

{
  /* <div>
</div>
<div>
  <Table />
</div> */
}
