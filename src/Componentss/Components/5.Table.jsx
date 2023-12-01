// query path and state parameter context api and global state

import { useContext } from "react";
import { ProductContext } from "../../Context/1.ProductData";
import { CopyArrProductContext } from "../../Context/CoptArr";
import { SetArrProductContext } from "../../Context/setFill";
import { useState } from "react";
import toast from "react-hot-toast";


const Table = () => {
  let newArr;
  let keyChangeArr;

  // use this in any component to access the global state

  const { arrCopy, setCopy } = useContext(CopyArrProductContext);
  const { fill, setFill } = useContext(SetArrProductContext);
  const [isEditClicked, setIsEditClicked] = useState(false);

  const [extraIndex, setExtraIndex] = useState("hello");

  const { arr, setArr } = useContext(ProductContext);
  // console.log("arr", arr);

  const deleteProduct = (arr, index) => {
    const updatedArr = arr.filter((item, idx) => {
      return idx !== index;
    });

    setArr(updatedArr);

    const deletedItem = arr[index];
    const updatedCopyArr = arrCopy.filter(
      (item) => item.ExtraId !== deletedItem.ExtraId
    );

    setCopy(updatedCopyArr);

    setFill(updatedArr);
  };

  const OnInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const EditIndexCategory = arr[extraIndex].ExtraId;

    const newArr = [...arr];

    newArr[extraIndex] = {
      ...newArr[extraIndex],
      [name]: value,
    };

    setArr(newArr);

    const updatedCopyArr = arrCopy.map((item) => {
      if (item.ExtraId === EditIndexCategory) {
        return {
          ...item,
          [name]: value,
        };
      }
      return item;
    });

    // Set the updated copy array
    setCopy(updatedCopyArr);

    console.log("arr", arr);
    console.log("arrCopy", arrCopy);
  };

  const onEditClicked = (arr, index) => {
    setExtraIndex(index);

    setIsEditClicked(true);
    // console.log(arr);
    // console.log(index);
  };

  // return arr === undefined ? (
  return isEditClicked ? (
    // <h1>Table Is Empty </h1>

    <div className="border-2 border-black rounded-md bg-gray-200 w-7/12 flex-col  ml-20 flex justify-center  w-7/12 pb-4      ">
      <div className="flex flex-col  justify-center items-center gap-1    ">
        <h1 className="text-[1.3rem] pt-5 font-bold text-center">
          Edit Product Details Here
        </h1>
        <input
          onChange={(e) => OnInputChange(e)}
          className="border 2 border-black rounded-md "
          placeholder="Product Id"
          type="text"
          name="ProductId"
        />

        <input
          onChange={(e) => OnInputChange(e)}
          className="border 2 border-black rounded-md "
          placeholder="Product Title"
          type="text"
          name="ProductTitle"
        />
        <input
          onChange={(e) => OnInputChange(e)}
          className="border 2 border-black rounded-md "
          placeholder="Image Link Here"
          type="text"
          name="ProductImg"
        />
        <input
          onChange={(e) => OnInputChange(e)}
          className="border 2 border-black rounded-md "
          placeholder="Product Description "
          type="text"
          name="ProductDescription"
        />
        <input
          onChange={(e) => OnInputChange(e)}
          className="border 2 border-black rounded-md "
          placeholder="Product Price"
          type="text"
          name="ProductPrice"
        />
        <input
          onChange={(e) => OnInputChange(e)}
          className="border 2 border-black rounded-md  "
          placeholder="Product Size"
          type="text"
          name="ProductSize"
        />
        <input
          onChange={(e) => OnInputChange(e)}
          className="border 2 border-black rounded-md "
          placeholder="Product Quantity"
          type="text"
          name="ProductQuantity"
        />

        <input
          onChange={(e) => OnInputChange(e)}
          className="border 2  border-black rounded-md "
          placeholder="Product Type"
          type="text"
          name="productType"
        />
        

        <button
          onClick={() =>{ 
            setIsEditClicked(false)
            toast.success("Edit Details is Submitted");

          }}
className="border 2 border-black mt-3 p-1 rounded-md bg-yellow-500 font-bold"
        >
          {" "}
          Submit Edit details{" "}
        </button>
      </div>
    </div>
  ) :<div className="bg-gray-300 border-x-[1px] border-black">
  <div>
    <div>
      <ul className="flex text-center font-bold bg-slate-100 border-black">
        <li className="w-[15%] border-[1px] border-black">ProductId</li>
        <li className="w-[15%] border-[1px] border-black">ProductTitles</li>
        <li className="w-[15%] border-[1px] border-black">Description</li>
        <li className="w-[15%] border-[1px] border-black">Price</li>
        <li className="w-[15%] border-[1px] border-black">Size</li>
        <li className="w-[15%] border-[1px] border-black">Quantity</li>
        <li className="w-[15%] border-[1px] border-black">Delete Button</li>
        <li className="w-[15%] border-[1px] border-black">Edit Button</li>
      </ul>
    </div>
  </div>
  <div>
    <div className="flex-col flex align-middle items-center">
      {arr.map((item, index) => (
        <table className="w-full" key={index}>
          <tbody>
            <tr className="flex  border-black">
              <td className="w-[15%] border-[1px] border-black text-center">
                {item.ProductId}
              </td>
              <td className="w-[15%] border-[1px] border-black text-center">
                {item.ProductTitle}
              </td>
              <td className="w-[15%] border-[1px] border-black text-center">
                {item.ProductDescription}
              </td>
              <td className="w-[15%] border-[1px] border-black text-center">
                {item.ProductPrice}
              </td>
              <td className="w-[15%] border-[1px] border-black text-center">
                {item.ProductSize}
              </td>
              <td className="w-[15%] border-[1px] border-black text-center">
                {item.ProductQuantity}
              </td>
              <td className="w-[15%] border-[1px]  border-black text-center">
                <button onClick={() => {
                  deleteProduct(arr, index);
                  toast.success("Product is Deleted");
                }}>
                  Delete
                </button>
              </td>
              <td className="w-[15%] border-[1px] border-black text-center">
                <button onClick={() => {
                  onEditClicked(arr, index);
                  toast.success("Start Editing");
                }}>
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  </div>
</div>

};

export default Table;
