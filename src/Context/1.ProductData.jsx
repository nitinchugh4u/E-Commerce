import { createContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = (props) => {
  
  const [arr, setArr] = useState([
    { ExtraId: 1,
      ProductId: "1",
      ProductTitle: "1",
      ProductImg:
        "https://static.toiimg.com/thumb/msid-68284394/68284394.jpg?width=500&resizemode=4",
      ProductDescription: " Yelloow Mens wear",
      ProductPrice: 500,
      ProductSize: "xl",
      ProductQuantity: "50",
      productType: "jeans",
      ProductInCart: 1,
    },

    { ExtraId: 2,
      ProductId: "2",
      ProductTitle: "1",
      ProductImg:
        "https://static.toiimg.com/thumb/msid-68284394/68284394.jpg?width=500&resizemode=4",
      ProductDescription: " Greeen Mens wear",
      ProductPrice: 600,
      ProductSize: "xl",
      ProductQuantity: "50",
      productType: "shirt",
      ProductInCart: 1,
    },

    { ExtraId: 3,
      ProductId: "3",
      ProductTitle: "1",
      ProductImg:
        "https://static.toiimg.com/thumb/msid-68284394/68284394.jpg?width=500&resizemode=4",
      ProductDescription: " Red Mens wear",
      ProductPrice: 700,
      ProductSize: "xl",
      ProductQuantity: "50",
      productType: "tshirt",
      ProductInCart: 1,
    },

    { ExtraId: 4,
      ProductId: "4",
      ProductTitle: "1",
      ProductImg:
        "https://static.toiimg.com/thumb/msid-68284394/68284394.jpg?width=500&resizemode=4",
      ProductDescription: " Black Mens wear",
      ProductPrice: 600,
      ProductSize: "xl",
      ProductQuantity: "50",
      productType: "tshirt",
      ProductInCart: 1,
    },

    { ExtraId: 5,
      ProductId: "5",
      ProductTitle: "1",
      ProductImg:
        "https://static.toiimg.com/thumb/msid-68284394/68284394.jpg?width=500&resizemode=4",
      ProductDescription: " Orange Mens wear",
      ProductPrice: 300,
      ProductSize: "xl",
      ProductQuantity: "50",
      productType: "jeans",
      ProductInCart: 1,
    },

    { ExtraId: 6,
      ProductId: "6",
      ProductTitle: "1",
      ProductImg:
        "https://static.toiimg.com/thumb/msid-68284394/68284394.jpg?width=500&resizemode=4",
      ProductDescription: " Pink Mens wear",
      ProductPrice: 450,
      ProductSize: "xl",
      ProductQuantity: "50",
      productType: "shirt",
      ProductInCart: 1,
    },

    { ExtraId: 7,
      ProductId: "7",
      ProductTitle: "1",
      ProductImg:
        "https://static.toiimg.com/thumb/msid-68284394/68284394.jpg?width=500&resizemode=4",
      ProductDescription: " Cream Mens wear",
      ProductPrice: 800,
      ProductSize: "xl",
      ProductQuantity: "50",
      productType: "tshirt",
      ProductInCart: 1,
    },

    { ExtraId: 8,
      ProductId: "8",
      ProductTitle: "1",
      ProductImg:
        "https://static.toiimg.com/thumb/msid-68284394/68284394.jpg?width=500&resizemode=4",
      ProductDescription: "Grey Mens wear",
      ProductPrice: 700,
      ProductSize: "xl",
      ProductQuantity: "50",
      productType: "jeans",
      ProductInCart: 1,
    },

    { ExtraId: 9,
      ProductId: "9",
      ProductTitle: "1",
      ProductImg:
        "https://static.toiimg.com/thumb/msid-68284394/68284394.jpg?width=500&resizemode=4",
      ProductDescription: " Blue Mens wear",
      ProductPrice: 600,
      ProductSize: "xl",
      ProductQuantity: "50",
      productType: "shirt",
      ProductInCart: 1,
    },

    { ExtraId: 10,
      ProductId: "10",
      ProductTitle: "1",
      ProductImg:
        "https://static.toiimg.com/thumb/msid-68284394/68284394.jpg?width=500&resizemode=4",
      ProductDescription: " Brown Mens wear",
      ProductPrice: 1100,
      ProductSize: "xl",
      ProductQuantity: "50",
      productType: "tshirt",
      ProductInCart: 1,
    },

    { ExtraId: 11,
      ProductId: "11",
      ProductTitle: "1",
      ProductImg:
        "https://static.toiimg.com/thumb/msid-68284394/68284394.jpg?width=500&resizemode=4",
      ProductDescription: " Sky Blue Mens wear",
      ProductPrice: 200,
      ProductSize: "xl",
      ProductQuantity: "50",
      productType: "jeans",
      ProductInCart: 1,
    },

    { ExtraId: 12,
      ProductId: "12",
      ProductTitle: "1",
      ProductImg:
        "https://static.toiimg.com/thumb/msid-68284394/68284394.jpg?width=500&resizemode=4",
      ProductDescription: "White Mens wear",
      ProductPrice: 500,
      ProductSize: "xl",
      ProductQuantity: "50",
      productType: "shirt",
      ProductInCart: 1,
    },

    { ExtraId: 13,
      ProductId: "13",
      ProductTitle: "1",
      ProductImg:
        "https://static.toiimg.com/thumb/msid-68284394/68284394.jpg?width=500&resizemode=4",
      ProductDescription: " Wine Mens wear",
      ProductPrice: 600,
      ProductSize: "xl",
      ProductQuantity: "50",
      productType: "tshirt",
      ProductInCart: 1,
    },

    {  ExtraId: 14,
      ProductId: "14",
      ProductTitle: "1",
      ProductImg:
        "https://static.toiimg.com/thumb/msid-68284394/68284394.jpg?width=500&resizemode=4",
      ProductDescription: " Dark Blue Mens wear",
      ProductPrice: 800,
      ProductSize: "xl",
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
