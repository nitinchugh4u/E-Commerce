import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./2.ProductCard";
import { RandomContext } from "./RandomContext";

export const AddProducts = () => {
  const [PopUp, setPopUp] = useState(false);
  const accounts = useContext(RandomContext);
  console.log("accounts", accounts);

  const [ProductDetails, setProductDetails] = useState({
    uniqueId: accounts,
    ProductId: "",
    ProductsDetails: "",
    ProductDescription: "",
    ProductPrice: "",
    ProductSize: "",
    ProductQuantity: "",
  });




  console.log("hello");
  const [isProductShowOnScreen, setProductShowOnScreen] = useState(false);

  useEffect(() => {
    console.log("mai useEffect hu");

    console.log(ProductDetails);
  }, [ProductDetails]);

  const changeProductId = (e) => {
    setProductDetails({ ...ProductDetails, ProductId: e.target.value });
  };

  const changeProductsDetails = (e) => {
    setProductDetails({ ...ProductDetails, ProductsDetails: e.target.value });
  };

  const changeProductDescription = (e) => {
    setProductDetails({
      ...ProductDetails,
      ProductDescription: e.target.value,
    });
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
          onClick={() => setPopUp(!PopUp)}
        >
          Add Product
        </button>
      </header>
      <div className="border-1 border-black h-[90%] bg-yellow-400 flex">
        <section className="w-1/5 h-full bg-blue-500"></section>
        <section
          className="bg-[#eaeaea] h-full w-4/5 flex flex-col gap-2 p-2"
          id="container"
        ></section>
      </div>

      <div>
        {isProductShowOnScreen ? (
          <ProductCard ProductDetails={ProductDetails} />
        ) : (
          <div></div>
        )}
      </div>

      {/* here comes the input box which we are going to popup  */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-[50%] w-1/2 h-[70%]">
        {PopUp ? (
          <div className="flex flex-col gap-2 bg-slate-500  border-white p-5">
            <h1 className="bg-cyan-500	"> Fill Product Details here </h1>
            <input
              onChange={changeProductId}
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Product Id"
              type="text"
            />
            <input
              onChange={changeProductsDetails}
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Products details"
              type="text"
            />
            <input
              onChange={changeProductDescription}
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Product Description "
              type="text"
            />
            <input
              onChange={changeProductPrice}
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Product Price"
              type="text"
            />
            <input
              onChange={changeProductSize}
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Product Size"
              type="text"
            />
            <input
              onChange={changeProductQuantity}
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Product Quantity"
              type="text"
            />
            {/* <img className="border-2  border-black" src="" alt="image" /> */}

            <button
              onClick={() => {
                setProductShowOnScreen(!isProductShowOnScreen);
                setPopUp(!PopUp);
                let date = Date.now();
                localStorage.setItem(date, JSON.stringify(ProductDetails));

                // setProductDetails({
                //   ProductId: "",
                //   ProductsDetails: "",
                //   ProductDescription: "",
                //   ProductPrice: "",
                //   ProductSize: "",
                //   ProductQuantity: "",
                // })
              }}
              className=" border-2  border-black bg-sky-600	"
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
