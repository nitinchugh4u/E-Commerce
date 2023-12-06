import React, { useContext, useState } from "react";
import Table from "./5.Table";
import { Link, Outlet } from "react-router-dom";
import { ProductContext } from "../../Context/1.ProductData";
import toast from "react-hot-toast";
import { CopyArrProductContext } from "../../Context/CoptArr";
import { SetArrProductContext } from "../../Context/setFill";
import { EditContext } from "../../Context/isEditClicked";

export const Admin = () => {
  const { arr, setArr } = useContext(ProductContext);
  // const { arrCopy, setCopy } = useContext(CopyArrProductContext);
  const { fill, setFill } = useContext(SetArrProductContext);
  const{isEditClicked,setIsEditClicked}= useContext(EditContext)


  const AddProducts = () => {};
  console.log("hello", arr);

  const searchByCategory = (e) => {
    const filteredArray = fill.filter((item, index) => {
      const search = e.target.value;
      let searchLc = search.toLowerCase();
      let itemLc = item.ProductDescription.toLowerCase();
      itemLc.includes(searchLc);
      return itemLc.includes(search);
    });
    setArr(filteredArray);
  };

  console.log(arr);
  return (
    <div className=" p-3 bg-white flex">
      <section className="w-1/5 bg-[#eaeaea] h-full"></section>
      <section className="w-4/5 h-full">
        
        
        

      



        {isEditClicked ?(""):( <header className="  flex justify-end  items-center border-black p-1  px-5 mb-5 mr-0  ">
          <input
            onChange={(e) => searchByCategory(e)}
            className="  m-2 flex justify-center items-center border-2 border-black  bg-slate-300 w-1/3 rounded-md  p-2 border-black text-[.9rem]"
            type="text"
            placeholder="Search by product, category or collection"
          />

          <Link
            to={"/ProductForm"}
            className="border-2 border-black p-2 bg-yellow-500 rounded-md"
          >
            Add Product
            {/* </button> */}
          </Link>

          {/* //call header or not */}
        </header>
)}
        <Table />

        {/* <Outlet /> */}
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
