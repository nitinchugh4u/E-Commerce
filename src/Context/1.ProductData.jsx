import { createContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = (props) => {
  
  const [arr, setArr] = useState([
    { ExtraId: 1,
      ProductId: "1",
      ProductTitle: "1",
      ProductImg:


      "https://images.bewakoof.com/t640/men-s-maroon-distressed-slim-fit-jeans-627684-1700552781-1.jpg",
        ProductDescription: " Marron Men's wear",
      ProductPrice: 500,
      ProductSize: "XL",
      ProductQuantity: "50",
      productType: "jeans",
      ProductInCart: 1,
    },

    { ExtraId: 2,
      ProductId: "2",
      ProductTitle: "1",
      ProductImg:

      // "https://images.bewakoof.com/t640/men-s-grey-garfield-hates-mornings-graphic-printed-oversized-t-shirt-624553-1700548902-1.jpg",
      "https://images.bewakoof.com/t320/men-s-white-blue-all-over-printed-oversized-shirt-627756-1701064170-1.jpg" , 
      ProductDescription: " Blue Men's wear",
      ProductPrice: 600,
      ProductSize: "XL",
      ProductQuantity: "50",
      productType: "shirt",
      ProductInCart: 1,
    },

    { ExtraId: 3,
      ProductId: "3",
      ProductTitle: "1",
      ProductImg:

      "https://images.bewakoof.com/t640/men-s-black-johnny-bravo-graphic-printed-oversized-t-shirt-599557-1687766100-1.jpg",
        ProductDescription: " Black Men's wear",
      ProductPrice: 700,
      ProductSize: "XL",
      ProductQuantity: "50",
      productType: "tshirt",
      ProductInCart: 1,
    },

    { ExtraId: 4,
      ProductId: "4",
      ProductTitle: "1",
      ProductImg:
        // "https://static.toiimg.com/thumb/msid-68284394/68284394.jpg?width=500&resizemode=4",
        "https://images.bewakoof.com/t640/men-s-grey-garfield-hates-mornings-graphic-printed-oversized-t-shirt-624553-1700548902-1.jpg",

        ProductDescription: " Grey Men's wear",
      ProductPrice: 600,
      ProductSize: "XL",
      ProductQuantity: "50",
      productType: "tshirt",
      ProductInCart: 1,
    },

    { ExtraId: 5,
      ProductId: "5",
      ProductTitle: "1",
      ProductImg:


      "https://images.bewakoof.com/t640/men-s-blue-washed-slim-fit-jeans-dark-blue-625547-1698244166-1.jpg",  
      ProductDescription: " Blue Men's wear",
      ProductPrice: 300,
      ProductSize: "XL",
      ProductQuantity: "50",
      productType: "jeans",
      ProductInCart: 1,
    },

    { ExtraId: 6,
      ProductId: "6",
      ProductTitle: "1",
      ProductImg:
        // "https://static.toiimg.com/thumb/msid-68284394/68284394.jpg?width=500&resizemode=4",
      "https://images.bewakoof.com/t320/men-s-black-white-all-over-printed-oversized-shirt-627760-1701064148-1.jpg",
        ProductDescription: " Brown Men's wear",
      ProductPrice: 450,
      ProductSize: "XL",
      ProductQuantity: "50",
      productType: "shirt",
      ProductInCart: 1,
    },

    { ExtraId: 7,
      ProductId: "7",
      ProductTitle: "1",
      ProductImg:
        // "https://static.toiimg.com/thumb/msid-68284394/68284394.jpg?width=500&resizemode=4",
      "https://images.bewakoof.com/t640/men-s-grey-skater-donald-graphic-printed-oversized-t-shirt-602558-1688380650-1.jpg",
        ProductDescription: " Grey Men's wear",
      ProductPrice: 800,
      ProductSize: "XL",
      ProductQuantity: "50",
      productType: "tshirt",
      ProductInCart: 1,
    },

    { ExtraId: 8,
      ProductId: "8",
      ProductTitle: "1",
      ProductImg:

      "https://images.bewakoof.com/t640/men-s-black-relaxed-fit-cargo-jeans-603385-1689757590-1.JPG",
        ProductDescription: "Black Men's wear",
      ProductPrice: 700,
      ProductSize: "XL",
      ProductQuantity: "50",
      productType: "jeans",
      ProductInCart: 1,
    },

    { ExtraId: 9,
      ProductId: "9",
      ProductTitle: "1",
      ProductImg:
        // "https://static.toiimg.com/thumb/msid-68284394/68284394.jpg?width=500&resizemode=4",
      "https://images.bewakoof.com/t320/men-s-white-yellow-all-over-printed-oversized-shirt-627757-1701064126-1.jpg",
        ProductDescription: " Yellow Men's wear",
      ProductPrice: 600,
      ProductSize: "XL",
      ProductQuantity: "50",
      productType: "shirt",
      ProductInCart: 1,
    },

    { ExtraId: 10,
      ProductId: "10",
      ProductTitle: "1",
      ProductImg:
        // "https://static.toiimg.com/thumb/msid-68284394/68284394.jpg?width=500&resizemode=4",
     "https://images.bewakoof.com/t640/men-s-black-the-dark-knight-graphic-printed-t-shirt-592032-1684137207-1.jpg",
        ProductDescription: " Black Men's wear",
      ProductPrice: 1100,
      ProductSize: "XL",
      ProductQuantity: "50",
      productType: "tshirt",
      ProductInCart: 1,
    },

    { ExtraId: 11,
      ProductId: "11",
      ProductTitle: "1",
      ProductImg:
        // "https://static.toiimg.com/thumb/msid-68284394/68284394.jpg?width=500&resizemode=4",
     "https://images.bewakoof.com/t320/men-s-multicolor-color-blocked-oversized-shirt-627758-1700735748-1.jpg",
        ProductDescription: " Stylish Men's wear",
      ProductPrice: 200,
      ProductSize: "XL",
      ProductQuantity: "50",
      productType: "shirt",
      ProductInCart: 1,
    },

    { ExtraId: 12,
      ProductId: "12",
      ProductTitle: "1",
      ProductImg:
        // "https://static.toiimg.com/thumb/msid-68284394/68284394.jpg?width=500&resizemode=4",
      "https://images.bewakoof.com/t320/men-s-yellow-ethnic-motif-printed-shirt-584830-1679388433-1.jpg",
        ProductDescription: "Brown Men's wear",
      ProductPrice: 500,
      ProductSize: "XL",
      ProductQuantity: "50",
      productType: "shirt",
      ProductInCart: 1,
    },

    { ExtraId: 13,
      ProductId: "13",
      ProductTitle: "1",
      ProductImg:
        // "https://static.toiimg.com/thumb/msid-68284394/68284394.jpg?width=500&resizemode=4",
      // "https://images.bewakoof.com/t640/men-s-black-brotherhood-graphic-printed-oversized-t-shirt-624281-1695988081-1.jpg",
     "https://images.bewakoof.com/t640/men-s-white-karma-circles-typography-oversized-t-shirt-489752-1701342776-1.jpg",
      ProductDescription: " White Men's wear",
      ProductPrice: 600,
      ProductSize: "XL",
      ProductQuantity: "50",
      productType: "tshirt",
      ProductInCart: 1,
    },

    {  ExtraId: 14,
      ProductId: "14",
      ProductTitle: "1",
      ProductImg:


      "https://images.bewakoof.com/t640/men-s-grey-color-block-straight-fit-jeans-grey-625930-1699268770-1.jpg",

      ProductDescription: " Grey Black Men's wear",
      ProductPrice: 800,
      ProductSize: "XL",
      ProductQuantity: "50",
      productType: "jeans",
      ProductInCart: 1,
    },
  ]);
  


  return (
    <ProductContext.Provider value={{ arr, setArr }}>
      {props.children}
    </ProductContext.Provider>
  );
};
export { ProductProvider, ProductContext };
