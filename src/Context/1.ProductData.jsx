import { createContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = (props) => {
  const [arr, setArr] = useState([{ProductId: "1",
  ProductTitle: "1",
  ProductImg: "https://static.spotboye.com/uploads/SINGLE-IMAGE_2021-8-6-9-38-20_thumbnail.jpg",
  ProductDescription: " Yelloow Mens wear",
  ProductPrice: "500",
  ProductSize: "xl",
  ProductQuantity: "50",
 ProductInCart:  1 },

  {ProductId: "2",
  ProductTitle: "1",
  ProductImg: "https://static.spotboye.com/uploads/SINGLE-IMAGE_2021-8-6-9-38-20_thumbnail.jpg",
  ProductDescription: " Greeen Mens wear",
  ProductPrice: "500",
  ProductSize: "xl",
  ProductQuantity: "50",
  ProductInCart:  1 },


  {ProductId: "3",
  ProductTitle: "1",
  ProductImg: "https://static.spotboye.com/uploads/SINGLE-IMAGE_2021-8-6-9-38-20_thumbnail.jpg",
  ProductDescription: " Red Mens wear",
  ProductPrice: "500",
  ProductSize: "xl",
  ProductQuantity: "50",
  ProductInCart:  1 },

  {ProductId: "4",
  ProductTitle: "1",
  ProductImg: "https://static.spotboye.com/uploads/SINGLE-IMAGE_2021-8-6-9-38-20_thumbnail.jpg",
  ProductDescription: " Black Mens wear",
  ProductPrice: "500",
  ProductSize: "xl",
  ProductQuantity: "50",
  ProductInCart:  1 },


  {ProductId: "5",
  ProductTitle: "1",
  ProductImg: "https://static.spotboye.com/uploads/SINGLE-IMAGE_2021-8-6-9-38-20_thumbnail.jpg",
  ProductDescription: " Orange Mens wear",
  ProductPrice: "500",
  ProductSize: "xl",
  ProductQuantity: "50",
  ProductInCart:  1 },


  {ProductId: "6",
  ProductTitle: "1",
  ProductImg: "https://static.spotboye.com/uploads/SINGLE-IMAGE_2021-8-6-9-38-20_thumbnail.jpg",
  ProductDescription: " Pink Mens wear",
  ProductPrice: "500",
  ProductSize: "xl",
  ProductQuantity: "50",
  ProductInCart:  1 },

  {ProductId: "7",
  ProductTitle: "1",
  ProductImg: "https://static.spotboye.com/uploads/SINGLE-IMAGE_2021-8-6-9-38-20_thumbnail.jpg",
  ProductDescription: " Cream Mens wear",
  ProductPrice: "500",
  ProductSize: "xl",
  ProductQuantity: "50",
  ProductInCart:  1 },



  {ProductId: "8",
  ProductTitle: "1",
  ProductImg: "https://static.spotboye.com/uploads/SINGLE-IMAGE_2021-8-6-9-38-20_thumbnail.jpg",
  ProductDescription: "Grey Mens wear",
  ProductPrice: "500",
  ProductSize: "xl",
  ProductQuantity: "50",
  ProductInCart:  1 },


  {ProductId: "9",
  ProductTitle: "1",
  ProductImg: "https://static.spotboye.com/uploads/SINGLE-IMAGE_2021-8-6-9-38-20_thumbnail.jpg",
  ProductDescription: " Blue Mens wear",
  ProductPrice: "500",
  ProductSize: "xl",
  ProductQuantity: "50",
  ProductInCart:  1 },

  {ProductId: "10",
  ProductTitle: "1",
  ProductImg: "https://static.spotboye.com/uploads/SINGLE-IMAGE_2021-8-6-9-38-20_thumbnail.jpg",
  ProductDescription: " Brown Mens wear",
  ProductPrice: "500",
  ProductSize: "xl",
  ProductQuantity: "50",
  ProductInCart:  1 },



  {ProductId: "11",
  ProductTitle: "1",
  ProductImg: "https://static.spotboye.com/uploads/SINGLE-IMAGE_2021-8-6-9-38-20_thumbnail.jpg",
  ProductDescription: " Sky Blue Mens wear",
  ProductPrice: "500",
  ProductSize: "xl",
  ProductQuantity: "50",
  ProductInCart:  1 },


  {ProductId: "12",
  ProductTitle: "1",
  ProductImg: "https://static.spotboye.com/uploads/SINGLE-IMAGE_2021-8-6-9-38-20_thumbnail.jpg",
  ProductDescription: "White Mens wear",
  ProductPrice: "500",
  ProductSize: "xl",
  ProductQuantity: "50",
  ProductInCart:  1 },

  {ProductId: "13",
  ProductTitle: "1",
  ProductImg: "https://static.spotboye.com/uploads/SINGLE-IMAGE_2021-8-6-9-38-20_thumbnail.jpg",
  ProductDescription: " Wine Mens wear",
  ProductPrice: "500",
  ProductSize: "xl",
  ProductQuantity: "50",
  ProductInCart:  1 },



  {ProductId: "14",
  ProductTitle: "1",
  ProductImg: "https://static.spotboye.com/uploads/SINGLE-IMAGE_2021-8-6-9-38-20_thumbnail.jpg",
  ProductDescription: " Dark Blue Mens wear",
  ProductPrice: "500",
  ProductSize: "xl",
  ProductQuantity: "50",
  ProductInCart:  1 },

]);
  return (
    <ProductContext.Provider value={{ arr, setArr }}>
      {props.children}
    </ProductContext.Provider>
  );
};
export { ProductProvider, ProductContext };
