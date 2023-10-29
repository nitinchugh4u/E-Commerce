const ProductCards = ({ ProductDetails }) => {
 
  
  return (
    <div>
      <h1>Please show the Products</h1>
      
      <h1>{ProductDetails.ProductId}</h1>
      <h1>{ProductDetails.ProductsDetails}</h1>
      <h1>{ProductDetails.ProductDescription}</h1>
      <h1>{ProductDetails.ProductPrice}</h1>
      <h1>{ProductDetails.ProductSize}</h1>
      <h1>{ProductDetails.ProductQuantity}</h1>  
    </div>
  );
};

export default ProductCards;
// Make sure to replace the class names and adjust the styles according to your project requirements.





