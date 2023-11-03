const ProductCard = ({ arr }) => {
  console.log("arr",arr);
  
  
  return (
    <div className="bg-red-500 px-5">
      
      <div>
        <div>
          <ul className="flex border-2 border-black">
            <li className="w-[15%] border-2 border-black">ProductId</li>
            <li className="w-[15%] border-2 border-black">ProductDetails</li>
            <li className="w-[15%] border-2 border-black">Description</li>
            <li className="w-[15%] border-2 border-black">Price</li>
            <li className="w-[15%] border-2 border-black">Size</li>
            <li className="w-[15%] border-2 border-black">Quantity</li>
          </ul>
        </div>
      </div>
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
                    {item.ProductsDetails}
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
  );
};

export default ProductCard