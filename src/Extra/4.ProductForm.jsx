import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Table from "./5.Table";

import AddProduct from "./3.AddProducts";
import { useContext } from "react";
import { ProductContext } from "../../Context/1.ProductData";

const ProductForm = () => {
  const { arr, setArr } = useContext(ProductContext);
  // console.log("data", arr, setArr);
  // const [arr, setArr] = useState([]);
  const [Products, SetProducts] = useState({
    ProductId: "",
    ProductTitle: "",
    ProductDescription: "",
    ProductPrice: "",
    ProductSize: "",
    ProductQuantity: "",
  });
  // const [arr, setArr] = useState([]);

  const OnInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    SetProducts({ ...Products, [name]: value });
  };
  // console.log(Products);

  const HandleSubmit = () => {
    if (
      Products.ProductId &&
      Products.ProductTitle &&
      Products.ProductDescription &&
      Products.ProductPrice &&
      Products.ProductSize &&
      Products.ProductQuantity
    ) {
      setArr([...arr, Products]);
      let date = Date.now();
      localStorage.setItem(date, JSON.stringify(Products));

      SetProducts({
        ProductId: "",
        ProductTitle: "",
        ProductDescription: "",
        ProductPrice: "",
        ProductSize: "",
        ProductQuantity: "",
      });
    }  else {
      alert("Please fill in all the details before submitting.");
    }
  };
  console.log(arr);

  useEffect(() => {
    localStorage.setItem("Products", JSON.stringify(arr));
    console.log("useEffect")
  }, [arr]);


  return (
    <div>
      <div>
        <h1>Fill Product Details Here</h1>
        <input
          onChange={OnInputChange}
          className="border 2 border-black "
          placeholder="Product Id"
          type="text"
          name="ProductId"
        />
        <input
          onChange={OnInputChange}
          className="border 2 border-black "
          placeholder="Product Title"
          type="text"
          name="ProductTitle"
        />
        <input
          onChange={OnInputChange}
          className="border 2 border-black "
          placeholder="Product Description "
          type="text"
          name="ProductDescription"
        />
        <input
          onChange={OnInputChange}
          className="border 2 border-black "
          placeholder="Product Price"
          type="text"
          name="ProductPrice"
        />
        <input
          onChange={OnInputChange}
          className="border 2 border-black "
          placeholder="Product Size"
          type="text"
          name="ProductSize"
        />
        <input
          onChange={OnInputChange}
          className="border 2 border-black "
          placeholder="Product Quantity"
          type="text"
          name="ProductQuantity"
        />
        <button onClick={HandleSubmit} className="border 2 border-black ">
          <Link to={"/Admin"}>Submit Product details</Link>
        </button>
      </div>
    </div>
  );
};
export default ProductForm;
