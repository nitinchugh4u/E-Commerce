import React from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  return (
    <div>
      <Link to={"/Form"}> Add Product </Link>
      {/* <button>Add Product</button> */}
    </div>
  );
};
export default AddProduct;
