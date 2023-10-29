import React, { useEffect, useState } from "react";
import ProductCards from "./1.jsx";

export const AddKaroProductsssssss = () => {
  const [PopUp, setPopUp] = useState(false);
  const [ProductDetails, setProductDetails] = useState({
    ProductId: "",
    ProductsDetails: "",
    ProductDescription: "",
    ProductPrice: "",
    ProductSize: "",
    ProductQuantity: "",
  });
  const [ProductList, setProductList] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("ProductList");
    if (data) {
      setProductList(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ProductList", JSON.stringify(ProductList));
  }, [ProductList]);

  const togglePopup = () => {
    setPopUp(!PopUp);
  };

//   const handleSubmit = () => {
//     setProductList([...ProductList, ProductDetails]);
//     setPopUp(false);
//   };



const handleSubmit = () => {
    setProductList([...ProductList, ProductDetails]);
    setPopUp(false);
    setProductDetails({
      ProductId: "",
      ProductsDetails: "",
      ProductDescription: "",
      ProductPrice: "",
      ProductSize: "",
      ProductQuantity: "",
    });
  };
  

  return (
    <div className="h-screen border-2 bg-red-500 border-black">
      <header className="h-[10%]  flex justify-end items-center pr-5">
        <button
          className="h-[80%] w-[15%] border-2 border-black bg-yellow-500"
          onClick={togglePopup}
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
          {ProductList.map((product, index) => (
            <ProductCards key={index} ProductDetails={product} />
          ))}
        </section>
      </div>

      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-[50%] w-1/2 h-[70%]">
        {PopUp ? (
          <div className="flex flex-col gap-2 bg-slate-500  border-white p-5">
            <h1 className="bg-cyan-500"> Fill Product Details here </h1>
            <input
              onChange={(e) =>
                setProductDetails({ ...ProductDetails, ProductId: e.target.value })
              }
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Product Id"
              type="text"
            />
            <input
              onChange={(e) =>
                setProductDetails({ ...ProductDetails, ProductsDetails: e.target.value })
              }
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Product Details"
              type="text"
            />
            <input
              onChange={(e) =>
                setProductDetails({ ...ProductDetails, ProductDescription: e.target.value })
              }
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Product Description"
              type="text"
            />
            <input
              onChange={(e) =>
                setProductDetails({ ...ProductDetails, ProductPrice: e.target.value })
              }
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Product Price"
              type="text"
            />
            <input
              onChange={(e) =>
                setProductDetails({ ...ProductDetails, ProductSize: e.target.value })
              }
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Product Size"
              type="text"
            />
            <input
              onChange={(e) =>
                setProductDetails({ ...ProductDetails, ProductQuantity: e.target.value })
              }
              className="border-2 rounded-2xl p-2 border-black"
              placeholder="Product Quantity"
              type="text"
            />

            <button
              onClick={handleSubmit}
              className="border-2  border-black bg-sky-600"
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

export default AddKaroProductsssssss;
