import React, { useContext, useState } from "react";
import Table from "./5.Table";
import { Link, Outlet } from "react-router-dom";
import { ProductContext } from "../../Context/1.ProductData";
import toast from "react-hot-toast";

export const Admin = () => {
  const { arr } = useContext(ProductContext);

  const AddProducts=()=>{

  }



  console.log(arr);
  return (
    <div className=" p-3 bg-white flex">
      <section className="w-1/5 bg-[#eaeaea] h-full"></section>
      <section className="w-4/5 h-full">
        <header className="   border-black p-1 flex items-center justify-end px-5  ">
          <Link 
            to={"/ProductForm"}
            className="border-2 border-black p-2 bg-yellow-500 rounded-md"
          // ><button onClick={()=>{
            // AddProducts(),
            // toast.success("Add New Product");

          // }}
          >
            Add Product
            {/* </button> */}
            
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
