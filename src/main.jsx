
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { App } from "./App";

import { Admin } from "./Componentss/Components/6.Admin";

import Table from "./Componentss/Components/5.Table";
import ProductForm from "./Componentss/Components/4.ProductForm";
import { ProductProvider } from "./Context/1.ProductData";
import { Cart } from "./Componentss/Components/7.Cart";
import { CartProductProvider } from "./Context/cartProduct";
import { QuantityProductProvider } from "./Context/CartQuantity";
import { Login } from "./Componentss/Components/8.Login";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/Admin",
        element: <Admin />,
        children: [{ path: "/Admin/Form", element: <ProductForm /> }],
      },
      // { path: "/Table", element: <Table /> },
    ],
  },{
    path:"/Cart",
    element: <Cart/> 
  },
  {
    path:"/Login",
    element: <Login/> 
  }

  // {path:"/Admin",
  // element:<Admin/>
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <App/>  */}
    <QuantityProductProvider>
    <CartProductProvider>
    <ProductProvider>
      <RouterProvider router={myRouter} />
    </ProductProvider>
    </CartProductProvider>
    </QuantityProductProvider>

    {/* <RouterProvider router={myRouter} /> */}
  </>
);
