import React, { useContext, useState } from "react";
import { CartProductContext } from "../../Context/cartProduct";
import { QuantityProductContext } from "../../Context/CartQuantity";
import { useMemo } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import AddButton from "../../assets/AddButton.png";
import ReduceButton from "../../assets/ReducedButton.png";
import DeleteButton from  "../../assets/Remove.png";

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
    <div className="flex flex-col justify-evenly">
      <div>
        <h1 className=" bg-[#eaeaea] bg-slate-300  font-bold p-4 ">Cart</h1>
      </div>

      <div className="flex  ">
        {
          cart.length > 0 ? <div className="flex flex-wrap w-[70%]  items-center gap-5     py-6 px-2">
          {cart.map((item, index) => {
            return (
              <div
                className="   p-3  border-2 w-[60vw] bg-[#eaeaea]   flex  items-center "
                key={index}
              >
                <img
                  className="h-[60px] flex justify-center  items-center bg-white"
                  src={item.ProductImg}
                  alt="image"
                />

                <h2 className=" w-[15vw] font-semibold  p-3    ">
                  {item.ProductDescription}
                </h2>
                <h2 className=" w-[10vw] font-bold flex justify-center align-middle p-3 ">
                  ₹{item.ProductPrice}
                </h2>

                {/* <div className="flex-col flex justify-center items-center"> */}

                <img
                  className="flex items-center  "
                  width={25}
                  onClick={() => {
                    item.ProductInCart = item.ProductInCart + 1;
                    setAdd((add) => add + 1),
                      toast.success("Quantity Is Increased");
                  }}
                  src={AddButton}
                  alt="Add button not found"
                />

                <h1 className="flex justify-center items-center font-semibold text-red-500  p-3">
                   {item.ProductInCart}
                </h1>

                <img
                  className="flex items-center"
                  width={25}
                  onClick={() => {
                    if (item.ProductInCart > 1) {
                      item.ProductInCart = item.ProductInCart - 1;
                      setRemove((remove) => remove - 1),
                        toast.success("Product Reduced From Cart");
                    }
                  }}
                  src={ReduceButton}
                  alt="reduce not found"
                />

              
              

                <img  className="flex items-center  ml-4"
                 onClick={() => {
                  removeItems(cart, index),
                    toast.success("Product Removed From Cart"),{
                      style: {
                        background: 'red',
                        color: 'white',
                      },
                    };
                }}
                  width={25} 
                  src={DeleteButton} alt="delete not found" />


                {/* </div> */}
              </div>
            );
          })}
        </div> : null
        }
        
        <div className=" p-4 w-full">
          {cart.length ? (
            <div className=" bg-gray-300 rounded-xl  flex-col flex justify-center   p-4">
              <h1 className="text-center font-semibold mb-4 ">Price Summary</h1>
              <p>Total MRP (incl all Taxes): ₹ {TotalPrice}</p>
              <p>Shipping Charges: FREE</p>
              <p>Discount: 10%</p>
              <p>Subtotal: ₹ {subTotal}</p>
              <button className="bg-rose-400 text-white px-4 py-2 rounded-md block mx-auto mt-4">
                Check Out
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src=" https://media.istockphoto.com/id/1073935306/photo/girls-carrying-shopping-bags.jpg?s=612x612&w=0&k=20&c=JB-TrME32dc0VTnaXVxsbJIExZqR71m-iyVOnG-7puM=  "
                alt=""
                height="500px"
                width="500px"
              />
              <Link to="/">
                {" "}
                <p className="bg-gray-200 p-2 rounded-md font-bold  text-center">
                  Please Go For Shopping
                </p>{" "}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
