import React, { useContext, useState } from "react";
import { CartProductContext } from "../../Context/cartProduct";
import { QuantityProductContext } from "../../Context/CartQuantity";
import { useMemo } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


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
    <div className="flex-col flex justify-center align-middle">
      <h1 className="bg-orange-500  p-2 ">Cart</h1>
      
      <div className="flex flex-col justify-center items-center">
      <div className="flex flex-wrap justify-center gap-5 border-4 border-gray-600 bg-gray-200 py-6 px-2">
        {cart.map((item, index) => {
          return (
            <div className="   p-2  border-2   bg-[#e9e9e9]"    key={index}>
              <img
                className="h-[120px] bg-white"
                src={item.ProductImg}
                alt="image"
              />
              
              <h2 className=" font-semibold flex justify-center  align-middle  ">
                {item.ProductDescription}
              </h2>
              <h2 className=" font-bold flex justify-center align-middle ">
              ₹{item.ProductPrice}
              </h2>

              <div className="flex-col flex justify-center items-center">
                <h1 className="font-bold">Total Quantity is {item.ProductInCart}</h1>

                <button                className="rounded-md bg-gray-500 text-white px-4 py-1 mt-2"

                  onClick={() => {
                    item.ProductInCart = item.ProductInCart + 1;
                    setAdd((add) => add + 1),toast.success("Quantity Is Increased");;
                  }}
                >
                  Add Quantity
                </button>
                
                <button  className="rounded-md bg-gray-500 text-white px-4 py-1 mt-2"

                  onClick={() => {
                    if (item.ProductInCart > 1) {
                      item.ProductInCart = item.ProductInCart - 1;
                      setRemove((remove) => remove - 1),toast.success("Product Reduced From Cart");;
                    }
                  }}
                >
                  Reduce Quantity
                </button>
                

                <button   className="rounded-md bg-gray-500 text-white px-4 py-1 mt-2"

                 onClick={() =>{ 
                  removeItems(cart, index),toast.success("Product Removed From Cart");
                  }}>
                  Remove Pruduct
                </button>
              
              </div>
            </div>
          );
        })}

<div className=" p-4">
          {cart.length ? (
            <div className=" bg-gray-300 rounded-xl flex-col flex justify-center  p-4">             
             <h1 className="text-center font-semibold mb-4 ">Price Summary</h1>
              <p>Total MRP (incl all Taxes): {TotalPrice}</p>
              <p>Shipping Charges: FREE</p>
              <p>Discount: 10%</p>
              <p>Subtotal: {subTotal}</p>
              <button className="bg-rose-400 text-white px-4 py-2 rounded-md block mx-auto mt-4">
                Check Out
              </button>
            </div>
          ) : (<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <img
           src=
          " https://media.istockphoto.com/id/1073935306/photo/girls-carrying-shopping-bags.jpg?s=612x612&w=0&k=20&c=JB-TrME32dc0VTnaXVxsbJIExZqR71m-iyVOnG-7puM=  "         alt="" height="500px" width="500px" />
         <Link to = "/" > <p className="bg-gray-200 font-bold  text-center">Please Go For Shopping</p> </Link> 
         
        </div>
        
          )}
        </div>
      </div>
      </div>
    </div>
  );
  
};

