// import React from "react";
// import ReactDOM from "react-dom/client";

// import "./index.css";

// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { App } from "./App";
// import AddProduct from "./Components/1.AddPoduct";

// const myRouter = createBrowserRouter([
//  {path: "/",
//  element:<App/>
// },
//  {path: "/AddProduct",
//  element: <AddProduct/>
//  }

// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <>

//       <RouterProvider router={myRouter} />

//   </>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { App } from "./App";

import { Admin } from "./Componentss/Components/6.Admin";

import Table from "./Componentss/Components/5.Table";
import ProductForm from "./Componentss/Components/4.ProductForm";
import { ProductProvider } from "./Context/1.ProductData";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      { path: "/Admin", element: <Admin /> },
      { path: "/Form", element: <ProductForm /> },
      { path: "/Table", element: <Table /> },
    ],
  },

  // {path:"/Admin",
  // element:<Admin/>
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <App/>  */}
    <ProductProvider>
      
      <RouterProvider router={myRouter} />
    </ProductProvider>

    {/* <RouterProvider router={myRouter} /> */}
  </>
);
