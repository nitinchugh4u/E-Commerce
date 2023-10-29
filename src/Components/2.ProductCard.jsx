const ProductCard = ({ arr }) => {
  console.log(arr);
  arr = [
    {
      ProductDescription: "1",
      ProductId: "1",
      ProductPrice: "2",
      ProductQuantity: "7",
      ProductSize: "3",
      ProductsDetails: "3",
    },
    {
      ProductDescription: "1",
      ProductId: "1",
      ProductPrice: "2",
      ProductQuantity: "7",
      ProductSize: "3",
      ProductsDetails: "3",
    },
    {
      ProductDescription: "1",
      ProductId: "1",
      ProductPrice: "2",
      ProductQuantity: "7",
      ProductSize: "3",
      ProductsDetails: "3",
    },
    {
      ProductDescription: "1",
      ProductId: "1",
      ProductPrice: "2",
      ProductQuantity: "7",
      ProductSize: "3",
      ProductsDetails: "3",
    },
  ];

  return (
    <div className="bg-red-500 px-5">
      <div>
        <div>
          <ul className="flex border-2 border-black">
            <li className="w-1/5 border-2 border-black">Product</li>
            <li className="w-1/5 border-2 border-black">Description</li>
            <li className="w-1/5 border-2 border-black">Price</li>
            <li className="w-1/5 border-2 border-black">Size</li>
            <li className="w-1/5 border-2 border-black">Quantity</li>
          </ul>
        </div>
      </div>
      <div>
        {arr.map((item, index) => {
          return (
            <table className="w-full" key={item.ProductId}>
              <tbody>
                <tr className="flex border-2 border-black">
                  <td className="w-1/5 border-2 border-black">
                    {item.ProductId}
                  </td>
                  <td className="w-1/5 border-2 border-black">
                    {item.ProductDescription}
                  </td>
                  <td className="w-1/5 border-2 border-black">
                    {item.ProductPrice}
                  </td>
                  <td className="w-1/5 border-2 border-black">
                    {item.ProductSize}
                  </td>
                  <td className="w-1/5 border-2 border-black">
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
// return (

// <div>
//   {arr.map((item,index)=>{
//     return(
//       <div key={arr.ProductId}>

//        <h1> PRODUCTS DETAILS </h1>
//       <h1>Product id is {item.ProductId}</h1>
//       <h1>Product Details is {item.ProductsDetails}</h1>
//       <h1>Product Description is {item.ProductDescription}</h1>
//       <h1>Product Price is {item.ProductPrice}</h1>
//       <h1>Product Size is {item.ProductSize}</h1>
//       <h1>Product Quantity is {item.ProductQuantity}</h1>

//   </div>

//     )

//   })}

{
  /* <h1>Please show the Products</h1>
      
      <h1>{ProductDetails.ProductId}</h1>
      <h1>{ProductDetails.ProductsDetails}</h1>
      <h1>{ProductDetails.ProductDescription}</h1>
      <h1>{ProductDetails.ProductPrice}</h1>
      <h1>{ProductDetails.ProductSize}</h1>
      <h1>{ProductDetails.ProductQuantity}</h1>   */
}
//     </div>
// );
// };

export default ProductCard;
// import React from "react";

// const ProductCard = ({ allProductDetails }) => {
//   return (
//     <div>
//       {allProductDetails && allProductDetails.length > 0 && (
//         <h1>Please show the Products</h1>
//       )}
//       {allProductDetails &&
//         allProductDetails.map((product, index) => (
//           <div key={index}>
//             <h1>{product.ProductId}</h1>
//             <h1>{product.ProductsDetails}</h1>
//             <h1>{product.ProductDescription}</h1>
//             <h1>{product.ProductPrice}</h1>
//             <h1>{product.ProductSize}</h1>
//             <h1>{product.ProductQuantity}</h1>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default ProductCard;

// const ProductCard = ({ allProductDetails }) => {
//   return (
//     <div>
//       <h1>Please show the Products</h1>
//       {allProductDetails.map((product, index) => (
//         <div key={index}>
//           <h1>{product.ProductId}</h1>
//           <h1>{product.ProductsDetails}</h1>
//           <h1>{product.ProductDescription}</h1>
//           <h1>{product.ProductPrice}</h1>
//           <h1>{product.ProductSize}</h1>
//           <h1>{product.ProductQuantity}</h1>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductCard;
// In this code, the input change handlers are provided for each input field. The ProductCard component iterates through the allProductDetails array to display all the submitted products on the screen. Make sure to include the necessary CSS styles and other components that are being imported in your application.

// Is this conversation helpful so far?

// const ProductCard = () => {
//   return (
//     <div>
//       <h1>Please show the Products</h1>

//       <table>
//         <thead>
//           <tr>
//             {keys.map((key) => (
//               <th key={key}>{key}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {parsedProductDetails.map((productDetails) => (
//             <tr key={productDetails.id}>
//               {keys.map((key) => (
//                 <td key={key}>{productDetails[key]}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// const ProductCard = ({ ProductDetails }) => {
//   //  console.log(ProductDetails)

// //    const 1ProductDetails = {uniqueId: 0.41143258103562674, ProductId: '1', ProductsDetails: '2', ProductDescription: '3', ProductPrice: ""}

// // arr = [ {uniqueId: 0.41143258103562674, ProductId: '1', ProductsDetails: '2', ProductDescription: '3', ProductPrice: ""}, {uniqueId: 0.41143258103562674, ProductId: '1', ProductsDetails: '2', ProductDescription: '3', ProductPrice: ""}, {uniqueId: 0.41143258103562674, ProductId: '1', ProductsDetails: '2', ProductDescription: '3', ProductPrice: ""},]

//   //   // for(let i =0; i<=localStorage.length;i++){
//   //   //   let value = localStorage.key(i)
//   //   //   // console.log(value.ProductId);

//   //   // }
//   //  for (let i = 0; i < localStorage.length; i++) {
//   //     let key = localStorage.key(i); // Retrieve the key at index i
//   //     let value = JSON.parse(localStorage.getItem(key)); // Parse the JSON data to an object
//   //     console.log("value",value.ProductId)
//   //     let {ProductId,ProductDescription,ProductPrice} = value;

//   //     // Check if the value is an object and if it has the ProductId property
//   //     // if (value && value.ProductId) {
//   //     //     console.log(value.ProductId); // Access the ProductId property
//   //     // }
//   // }
//   // const keys = Object.keys(ProductDetails);
//   // console.log("ProductDetails", ProductDetails)

//   // if (!ProductDetails || !ProductDetails.length) {
//   //   // Render loading state or return null
//   //   return <div>Loading...</div>;
//   // }

//   return (
//     <div>
//       <h1>Please show the Products</h1>

//        <table className="p-2 border-2 border-red-500">
//       <thead className="p-2 border-2 border-red-500">
//         <tr className="p-2 border-2 border-red-500">
//           {keys.map((key) => (
//             <th key={key}>{key}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody className="p-2 border-2 border-red-500">
//         <tr className="p-2 border-2 border-red-500">
//           {keys.map((key) => (
//             <td key={key}>{ProductDetails[key]}</td>
//           ))}
//         </tr>
//       </tbody>
//     </table> }

// {/*

//       <h1>{ProductDetails.ProductId}</h1>
//       <h1>{ProductDetails.ProductsDetails}</h1>
//       <h1>{ProductDetails.ProductDescription}</h1>
//       <h1>{ProductDetails.ProductPrice}</h1>
//       <h1>{ProductDetails.ProductSize}</h1>
//       <h1>{ProductDetails.ProductQuantity}</h1>
//     </div>
//   );
// };

// export default ProductCard
