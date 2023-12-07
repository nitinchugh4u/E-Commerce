import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Context/1.ProductData";
import { CopyArrProductContext } from "../../Context/CoptArr";
import { SetArrProductContext } from "../../Context/setFill";
// import { Link } from "react-router-dom";

const Header = () => {
  const { arr, setArr } = useContext(ProductContext);
  const { arrCopy, setCopy } = useContext(CopyArrProductContext);

  const { fill, setFill } = useContext(SetArrProductContext);

  // console.log("arrCopy", arrCopy);

  const [filter, setFilter] = useState("men");
  const [Price, setPrice] = useState("");



  const inputValue = (e) => {
    if (filter !== "men") {
      const search = e.target.value;
      console.log("fill", fill);

      const filteredArray = fill.filter((item, index) => {
        let searchLc = search.toLowerCase();
        let itemLc = item.ProductDescription.toLowerCase();
        itemLc.includes(searchLc);
        return itemLc.includes(search);
      });
      setArr(filteredArray);
    } else {
      const search = e.target.value;

      const filteredArray = arrCopy.filter((item, index) => {
        let searchLc = search.toLowerCase();
        let itemLc = item.ProductDescription.toLowerCase();
        itemLc.includes(searchLc);
        return itemLc.includes(search);
      });
      setArr(filteredArray);
    }
    // console.log("filteredArray", filteredArray);
  };
  console.log("fill", fill);



  const handleChange = (event) => {
    console.log(event.target.value, "fff");
    setFilter(event.target.value);
    const{value} = event.target;
    

    const filteredArray = arrCopy.filter((item, index) => {
      // console.log("array",filteredArray);


      return  item.productType === value ||  value === "men"   ;
      // return 
      

      // if (event.target.value === "men") {
      //   return arrCopy;
      // }

      // return item.productType === event.target.value;
    });

    console.log("filteredArray", filteredArray);
    setArr(filteredArray);
    setFill(filteredArray);
    // setCopy(filteredArray)
  };
  console.log("arr", arr);



  const handlePrices = (e) => {
    if (e.target.value === "PRICES") {
    } else if (e.target.value === "lowToHigh") {
      const sortedArray = [...fill];
      const x = sortedArray.sort((a, b) => a.ProductPrice - b.ProductPrice);
      setFill([...x]);
      setPrice()

      setArr([...x]);
    } else if (e.target.value === "highToLow") {
      const sortedArray = [...fill];
      const x = sortedArray.sort((a, b) => b.ProductPrice - a.ProductPrice);
      setFill([...x]);
      setPrice()

      setArr([...x]);
    } else {
    }
  };

  
  return (
    <div className="h-[10%] border-2   flex p-2 bg-[#eaeaea]  ">
      <section className="w-1/2 flex justify-evenly items-center">
        {/* <img
          className="rounded-full"
          src="https://img.freepik.com/free-vector/hand-drawn-clothing-store-logo-design_23-2149499592.jpg"
          alt=""
          height="60px"
          width="60px"
        /> */}

        <Link to="/" > <img
          className="rounded-full"
          src="https://img.freepik.com/free-vector/hand-drawn-clothing-store-logo-design_23-2149499592.jpg"
          alt=""
          height="60px"
          width="60px"
        /></Link>

        <Link to="/" > <h1 className="text-[1.4rem] font-bold text-red-700">
          Style Collection
        </h1>
  </Link>

        {/* <h1 className="text-[1.4rem] font-bold text-blue-900">
          Style Collection
        </h1> */}

        <select
          className="p-2 bg-none rounded-md "
          onChange={handleChange}
          value={filter}
        >
          {/* map */}
          <option className="     bg-[#eaeaea] p-2 " value="men">Men</option>
          <option className=" bg-[#eaeaea]    " value="jeans">Jeans</option>
          <option className=" bg-[#eaeaea] p-2 " value="shirt">Shirt</option>
          <option className="  bg-[#eaeaea] p-2 " value="tshirt">T-shirt</option>
        </select>
        
        <select  className="p-2 bg-none rounded-md "  onChange={(e) => handlePrices(e)} value={Price}>
          {/* map */}
          <option className=" bg-[#eaeaea] p-2"   value="Prices">Prices</option>
          <option className="  bg-[#eaeaea] p-2" value="highToLow">High to Low</option>
          <option className=" bg-[#eaeaea] p-2" value="lowToHigh">Low to High</option>
        </select>
      </section>

      <section className="w-1/2 flex items-center justify-evenly">
        <input
          onChange={inputValue}
          className="w-3/5 rounded-md  p-2 border-black text-[.9rem]"
          type="text"
          placeholder="Search by product, category or collection"
        />
        <Link to={"/Login"}>
          <p className="hover:text-red-500">Login</p>
        </Link>

        <Link to={"/Admin"}>
          <p className="hover:text-red-500">Admin</p>
        </Link>

        <Link to={"/Cart"}>
          <p className="hover:text-red-500">Cart</p>
        </Link>
      </section>
    </div>
  );
};
export default Header;
