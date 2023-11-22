import React, { useContext, useState } from "react";
import { CartProductContext } from "../../Context/cartProduct";
import { QuantityProductContext } from "../../Context/CartQuantity";
import { useMemo } from "react";

export const Cart = () => {
  const { cart, setCart } = useContext(CartProductContext);
  console.log("cart", cart);

  // const [TotalPrice,setTotalPrice] = useState(0);

  // for add
  const [add, setAdd] = useState(1);
  const [remove, setRemove] = useState(1);
  const [delet, setDelete] = useState(1);
  const { Quantity, setQuantity } = useContext(QuantityProductContext);

  const removeItems = (cart, indexToRemove) => {
    // console.log("indexes",index)
    console.log("cart", cart);
    const updatedCart = [...cart];
    updatedCart.splice(indexToRemove, 1);
    setCart(updatedCart);
  };

  let TotalPrice = 0;
  let subTotal = 0;

  const total = useMemo(() => {
    return cart.map((item, index) => {
      const itemPrice = item.ProductPrice * item.ProductInCart;
      TotalPrice = TotalPrice + itemPrice;
      subTotal = TotalPrice - TotalPrice / 10;
      //  console.log("itemPrice",itemPrice)
      console.log("TotalPrice", TotalPrice);
      return TotalPrice;
    });
  }, [add, remove, delet, cart]);
  console.log(TotalPrice);

  return (
    <div>
      <h1 className="bg-orange-500">Cart</h1>
      <br />

      <div className=" flex flex-wrap bg-sky-700   gap-5 border-4 border-red-600  bg-grey ">
        {cart.map((item, index) => {
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
              <div className="">
                <h1>Total Quantity is {item.ProductInCart}</h1>
                <button
                  onClick={() => {
                    item.ProductInCart = item.ProductInCart + 1;
                    setAdd((add) => add + 1);
                  }}
                >
                  Add Quantity
                </button>
                <br />
                <button
                  onClick={() => {
                    if (item.ProductInCart > 1) {
                      item.ProductInCart = item.ProductInCart - 1;
                      setRemove((remove) => remove - 1);
                    }
                  }}
                >
                  Reduce Quantity
                </button>
                <br />

                <button onClick={() => removeItems(cart, index)}>
                  Remove Pruduct
                </button>
              </div>
            </div>
          );
        })}

        <div>
          <h1>Price Summary</h1>
          <h1>Total Mrp (incl all Taxes) = {TotalPrice} </h1>
          <h1>Shipping Charges = FREE </h1>
          <h1>Discount = 10% </h1>
          <h1>Subtotal = {subTotal} </h1>

          <button className="bg-rose-400 h-[50px] ">Check Out</button>
        </div>
      </div>
    </div>
  );
};
