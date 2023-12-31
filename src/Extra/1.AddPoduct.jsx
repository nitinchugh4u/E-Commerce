
import React, { useEffect, useState } from "react";
import ProductCard from "./2.ProductCard";

const AddProduct = () => {
  const [PopUp, setPopUp] = useState(false);
  const [ProductDetails, setProductDetails] = useState({
    ProductId: "",
    ProductsDetails: "",
    ProductDescription: "",
    ProductPrice: "",
    ProductSize: "",
    ProductQuantity: "",
  });
  
  let [arr, setArr] = useState(() => {
    const savedArr = JSON.parse(localStorage.getItem("productData")) || [];
    return savedArr;
  });

  // let[arr,setArr] = useState([])
  console.log("Array",arr);

  const [isProductShowOnScreen, setProductShowOnScreen] = useState(false);

  useEffect(() => {
    localStorage.setItem("productData", JSON.stringify(arr));
    console.log("useEffect")
  }, [arr]);

  const changeProductId = (e) => {
    setProductDetails({ ...ProductDetails, ProductId: e.target.value });
    
  };
  console.log("Outside Objects Print",ProductDetails)

  const changeProductsDetails = (e) => {
    setProductDetails({ ...ProductDetails, ProductsDetails: e.target.value });
  };

  const changeProductDescription = (e) => {
    setProductDetails({ ...ProductDetails,ProductDescription: e.target.value,});
  };

  const changeProductPrice = (e) => {
    setProductDetails({ ...ProductDetails, ProductPrice: e.target.value });
  };

  const changeProductSize = (e) => {
    setProductDetails({ ...ProductDetails, ProductSize: e.target.value });
  };

  const changeProductQuantity = (e) => {
    setProductDetails({ ...ProductDetails, ProductQuantity: e.target.value });
  };

  return (
    <div className="h-screen border-2 bg-red-500 border-black">
      <header className="h-[10%]  flex justify-end items-center pr-5">
        <button
          className="h-[80%] w-[15%] border-2 border-black bg-yellow-500"
          onClick={() => {
            setPopUp(!PopUp);
            setProductShowOnScreen(!isProductShowOnScreen);
          }}
        >
          Add Product
        </button>
      </header>
      <div className="border-1 border-black h-[90%] bg-yellow-400 flex">
        <section className="w-1/5 h-full bg-blue-500"></section>
        <section
          className="bg-[#eaeaea] h-full w-4/5 flex flex-col gap-2 p-2"
          id="container"
        >
          <div>
            {isProductShowOnScreen ? <div></div> : <ProductCard arr={arr} />}
          </div>
        </section>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-[50%] w-1/2 h-[70%]">
        {PopUp ? (
          <div className="flex flex-col gap-2 bg-slate-500  border-white p-5">
            <h1 className="bg-cyan-500"> Fill Product Details here </h1>
            <input
              onChange={changeProductId}
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Product Id"
              type="text"
              required
            />
            <input
              onChange={changeProductsDetails}
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Products details"
              type="text"
              required
            />

            <input
              onChange={changeProductDescription}
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Product Description"
              type="text"
              required
            />
            <input
              onChange={changeProductPrice}
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Product Price"
              type="text"
              required
            />
            <input
              onChange={changeProductSize}
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Product Size"
              type="text"
              required
            />
            <input
              onChange={changeProductQuantity}
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Product Quantity"
              type="text"
              required
            />

            <button
              onClick={() => {
                if (
                  ProductDetails.ProductId &&
                  ProductDetails.ProductsDetails &&
                  ProductDetails.ProductDescription &&
                  ProductDetails.ProductPrice &&
                  ProductDetails.ProductSize &&
                  ProductDetails.ProductQuantity
                ) {
                  setArr([...arr, ProductDetails]);
                  console.log("hello",arr)
                  console.log("ProductDetails",ProductDetails)

                  setProductShowOnScreen(!isProductShowOnScreen);
                  setPopUp(!PopUp);
                  let date = Date.now();
                  localStorage.setItem(date, JSON.stringify(ProductDetails));

                  setProductDetails({
                    ProductId: "",
                    ProductsDetails: "",
                    ProductDescription: "",
                    ProductPrice: "",
                    ProductSize: "",
                    ProductQuantity: "",
                  });
                } else {
                  alert("Please fill in all the details before submitting.");
                }
              }}
              className=" border-2  border-black bg-sky-600 "
            >
              Submit Product Details
            </button>
          </div>
        ) : (
          <h1></h1>
        )}
      </div>
    </div>
  );
};

export default AddProduct;