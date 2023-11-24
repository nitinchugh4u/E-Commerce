import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../Context/1.ProductData";

const Header = () => {
  const { arr, setArr } = useContext(ProductContext);
  const [arrCopy, setCopy] = useState([...arr]);
  // console.log("arrCopy", arrCopy);

  const [filter, setFilter] = useState("");

  const inputValue = (e) => {
    const search = e.target.value;

    const filteredArray = arrCopy.filter((item, index) => {
      let searchLc = search.toLowerCase();
      let itemLc = item.ProductDescription.toLowerCase();
      itemLc.includes(searchLc);
      return itemLc.includes(search);
    });
    // console.log("filteredArray", filteredArray);
    setArr(filteredArray);
  };

  const handleChange = (event) => {
    console.log(event.target.value, "fff");
    // setFilter(event.target.value);

    const filteredArray = arrCopy.filter((item, index) => {
      // console.log("array",filteredArray);

      if (event.target.value === "men") {
        return arrCopy;
      }

      return item.productType === event.target.value;
    });

    console.log("filteredArray", filteredArray);
    setArr(filteredArray);
    // setCopy(filteredArray)
  };
  return (
    <div className="h-[10%] border-2 border-black  flex p-2 bg-[#eaeaea]">
      <section className="w-1/2 flex justify-evenly items-center">
        <h1 className="text-[1.4rem] font-bold text-blue-900">
          Style Collection
        </h1>
        ``
        <select onChange={(e) => handleChange(e)} value={filter}>
          {/* map */}
          <option value="men">MEN</option>
          <option value="jeans">Jeans</option>
          <option value="shirt">Shirt</option>
          <option value="tshirt">T-shirt</option>
        </select>
        <select>
          {/* map */}
          <option value="">PRICES</option>
          <option value="">High to Low</option>
          <option value="">Low to High</option>
        </select>
      </section>

      <section className="w-1/2 flex items-center justify-evenly">
        <input
          onChange={inputValue}
          className="w-3/5 border-[1px] p-2 border-black text-[.9rem]"
          type="text"
          placeholder="Search by product, category or collection"
        />
        <Link to={"/Login"}>
          <p>Login</p>
        </Link>

        <Link to={"/Admin"}>
          <p>Admin</p>
        </Link>

        <Link to={"/Cart"}>
          <p>Cart</p>
        </Link>
      </section>
    </div>
  );
};
export default Header;
