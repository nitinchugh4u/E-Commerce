// query path and state parameter context api and global state

import { useContext } from "react";
import { ProductContext } from "../../Context/1.ProductData";

const Table = () => {
  // use this in any component to access the global state
  const { arr } = useContext(ProductContext);
  console.log("arr", arr);
  // return arr === undefined ? (
  return arr.length === 0 ? (
    <h1>Table Is Empty </h1>
  ) : (
    <div className="bg-red-500 px-5">
      <div>
        <div>
          <ul className="flex border-2 border-black">
            <li className="w-[15%] border-2 border-black">ProductId</li>
            <li className="w-[15%] border-2 border-black">ProductTitles</li>
            <li className="w-[15%] border-2 border-black">Description</li>
            <li className="w-[15%] border-2 border-black">Price</li>
            <li className="w-[15%] border-2 border-black">Size</li>
            <li className="w-[15%] border-2 border-black">Quantity</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          {arr.map((item, index) => {
            return (
              <table className="w-full" key={index}>
                <tbody>
                  <tr className="flex border-2 border-black">
                    <td className="w-[15%] border-2 border-black">
                      {item.ProductId}
                    </td>
                    <td className="w-[15%] border-2 border-black">
                      {item.ProductTitle}
                    </td>
                    <td className="w-[15%] border-2 border-black">
                      {item.ProductDescription}
                    </td>
                    <td className="w-[15%] border-2 border-black">
                      {item.ProductPrice}
                    </td>
                    <td className="w-[15%] border-2 border-black">
                      {item.ProductSize}
                    </td>
                    <td className="w-[15%] border-2 border-black">
                      {item.ProductQuantity}
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>
      </div>
    </div>
  ); // retun of top
};

export default Table;
