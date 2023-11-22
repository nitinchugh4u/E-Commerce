import React, { useContext, useState } from "react";
import { ProductContext } from "../../Context/1.ProductData";
import { CartProductContext } from "../../Context/cartProduct";
import { QuantityProductContext } from "../../Context/CartQuantity";

export const ClientProduct = () => {
  const { Quantity, setQuantity } = useContext(QuantityProductContext);

  const { arr } = useContext(ProductContext);

  const { cart, setCart } = useContext(CartProductContext);

  const SelectedProducts = (arr, index) => {
    const CurrentProductId = arr[index].ProductId;

    const isProductInCart = cart
      .map((product) => product.ProductId)
      .includes(CurrentProductId);

    if (!isProductInCart) {
      setCart([...cart, arr[index]]);
    } else {
      console.log("mai toh hu phle se hi");
      // setQuantity( Quantity + 1);
      // arr[index].ProductInCart+=1;
      const findId = arr[index].ProductId;
      console.log(findId);
      console.log("cart", cart);

      cart.map((item, index) => {
        if (item.ProductId === findId) {
          item.ProductInCart = item.ProductInCart + 1;
          console.log("cart", cart);
        }
      });

      console.log("array", arr);
    }
  };
  console.log("cart", cart);

  return (
    <div className=" flex flex-wrap bg-sky-700   gap-5 border-4 border-red-600  bg-grey ">
      {arr.map((item, index) => {
        return (
          <div className="  border-2   bg-sky-500" key={index}>
            <img
              className="h-[120px] bg-white"
              src={item.ProductImg}
              alt="image"
            />
            <h2 className="flex justify-center align-middle">
              {item.ProductTitle}
            </h2>
            <h2 className="flex justify-center  align-middle  ">
              {item.ProductDescription}
            </h2>
            <h2 className="flex justify-center align-middle ">
              {item.ProductPrice}
            </h2>

            <button
              onClick={() => SelectedProducts(arr, index)}
              className=" bg-sky-800 flex justify-center align-middle center-text"
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};
