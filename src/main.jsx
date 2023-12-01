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
import {
  CopyArrProductContext,
  CopyArrProductProvider,
} from "./Context/CoptArr";
import { SetArrProductContext, SetArrProductProvider } from "./Context/setFill";
import { Toaster } from "react-hot-toast";
import { ClientProduct } from "./Componentss/Components/3.ClientProduct";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

      {path: "/",
    element: <ClientProduct/>
  },
      {
        path: "/Admin",
        element: <Admin />,
      },
      {
        path: "/ProductForm",
        element: <ProductForm/>

      }
    ],
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/Login",
    element: <Login />,
  },

  // {path:"/Admin",
  // element:<Admin/>
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <App/>  */}
    {/* <CopyArrProductProvider>  */}

    <QuantityProductProvider>
      <Toaster />
      <CartProductProvider>
        <ProductProvider>
          <CopyArrProductProvider>
            <SetArrProductProvider>
              <RouterProvider router={myRouter} />
            </SetArrProductProvider>
          </CopyArrProductProvider>
        </ProductProvider>
      </CartProductProvider>
    </QuantityProductProvider>
    {/* </CopyArrProductProvider> */}

    {/* <RouterProvider router={myRouter} /> */}
  </>
);
