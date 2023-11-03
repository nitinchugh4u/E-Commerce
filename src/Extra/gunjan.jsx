// import { RouterProvider, createBrowserRouter } from "react-router-dom";


// const myRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//         <Product />
//     ),
//   },
//   {
//     path: "/contact",
//     element: (
//         <AddProduct />
//     ),
//   },
// ]);
// const MainRoute = () => {
//   return <RouterProvider router={myRouter} />;
// };
// export default MainRoute;


// --------Product page--------------
// import React, { useState, useEffect } from "react";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { ProductService } from "../service/ProductService";
// import { Link } from "react-router-dom";
// import "primereact/resources/themes/lara-light-indigo/theme.css";
// import { FilterMatchMode } from "primereact/api";
// import { Dropdown } from "primereact/dropdown";
// import { Tag } from "primereact/tag";

// const Products = () => {
//   const [products, setProducts] = useState(null);
//   const [filters, setFilters] = useState({
//     name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
//     category: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
//     price: { value: null, matchMode: FilterMatchMode.IN },
//     size: { value: null, matchMode: FilterMatchMode.IN },
//     quantity: { value: null, matchMode: FilterMatchMode.EQUALS },
//     avaliabilty: { value: null, matchMode: FilterMatchMode.EQUALS },
//   });
//   const [size] = useState(["XS", "S", "M", "L", "XL"]);
//   const [avaliabilty] = useState(["Instock", "Out of Stock"]);

//   useEffect(() => {
//     ProductService.getProducts().then((data) => setProducts(data));
//   }, []);

//   const filterSizeRow = (options) => {
//     return (
//       <Dropdown
//         value={options.value}
//         options={size}
//         onChange={(e) => options.filterApplyCallback(e.value)}
//         itemTemplate={statusItemTemplate}
//         placeholder="Select One"
//         className="p-column-filter"
//         showClear
//         style={{ minWidth: "12rem" }}
//       />
//     );
//   };
//   const filterAvalibilityRow = (options) => {
//     return (
//       <Dropdown
//         value={options.value}
//         options={avaliabilty}
//         onChange={(e) => options.filterApplyCallback(e.value)}
//         itemTemplate={statusItemTemplate}
//         placeholder="Select One"
//         className="p-column-filter"
//         showClear
//         style={{ minWidth: "12rem" }}
//       />
//     );
//   };
//   const statusItemTemplate = (option) => {
//     return <Tag value={option} />;
//   };

//   return (
//     <div>
//       <div className="product-bar">
//         <p style={{ fontSize: "20px" }}>Products:</p>
//         <Link to="/addprod">
//           <button>Add Product</button>
//         </Link>
//       </div>

//       {products && (
//         <DataTable
//           value={products}
//           filters={filters}
//           filterDisplay="row"
//           tableStyle={{ minWidth: "70rem" }}
//         >
//           <Column
//             field="name"
//             filter
//             filterPlaceholder="Search by name"
//             header="Name"
//           ></Column>
//           <Column
//             field="category"
//             filter
//             filterPlaceholder="Search by category"
//             header="Category"
//           ></Column>
//           <Column
//             field="price"
//             dataType="numeric"
//             filter
//             filterPlaceholder="Search by price"
//             header="Price"
//           ></Column>
//           <Column
//             field="size"
//             showFilterMenu={false}
//             filterElement={filterSizeRow}
//             filter
//             filterPlaceholder="Search by name"
//             header="Size"
//           ></Column>
//           <Column
//             field="quantity"
//             dataType="numeric"
//             filter
//             filterPlaceholder="Search by quantity"
//             header="Quantity"
//           ></Column>
//           <Column
//             field="avaliabilty"
//             showFilterMenu={false}
//             filterElement={filterAvalibilityRow}
//             filter
//             filterPlaceholder="Search by name"
//             header="Avaliability"
//           ></Column>
//         </DataTable>
//       )}
//     </div>
//   );
// };

// export default Products;


// --------------Add Product---------------------

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { ProductService } from "../service/ProductService";

// const AddProduct = () => {
//   const [products, setProducts] = useState({
//     name: "",
//     price: "",
//     description: "",
//     category: "",
//     size: "",
//     quantity: "",
//     avaliabilty: "",
//     image: "",
//   });
//   console.log(products);
//   const onInputChange = (e) => {
//     const { name, value } = e.target;
//     setProducts((prevState) => ({ ...prevState, [name]: value }));
//   };
//   const dispatchSaveProduct = () => {
//     ProductService.setProductsData(products);
//   };

//   return (
//     <div className="Form-data">
//       <p>Add details</p>
//       <div
//         style={{
//           boxShadow: "1px 1px 4px grey",
//           width: "25vw",
//           padding: "3rem",
//           height: "60vh",
//         }}
//       >
//         <div className="Form-input">
//           Product Name:
//           <input
//             type="text"
//             name="name"
//             value={products.name}
//             onChange={onInputChange}
//           ></input>
//           Product Description:
//           <input
//             type="text"
//             name="name"
//             value={products.description}
//             onChange={onInputChange}
//           ></input>
//           Product Category:
//           <input
//             type="text"
//             name="category"
//             value={products.category}
//             onChange={onInputChange}
//           ></input>
//           Product Price:
//           <input
//             type="text"
//             name="price"
//             value={products.price}
//             onChange={onInputChange}
//           ></input>
//           Product Size:
//           <select
//             name="size"
//             value={products.avaliabilty}
//             onChange={onInputChange}
//           >
//             <option value=""></option>
//             <option value="XS">XS</option>
//             <option value="S">S</option>
//             <option value="M">M</option>
//             <option value="L">L</option>
//             <option value="XL">XL</option>
//           </select>
//           Product Quantity:
//           <input
//             type="text"
//             name="quantity"
//             value={products.quantity}
//             onChange={onInputChange}
//           ></input>
//           Product Avaliabilty:
//           <select
//             name="size"
//             value={products.avaliabilty}
//             onChange={onInputChange}
//           >
//             <option value="Instock">Instock</option>
//             <option value="Out of Stock">Out of Stock</option>
//           </select>
//           <div>
//             Image of Product:
//             <input
//               type="url"
//               value={products.image}
//               name="image"
//               onChange={onInputChange}
//               accept="image/*"
//             />
//             <img
//               src={products.image}
//               alt="Uploaded Image"
//               width="200vw"
//               height="200vh"
//             />
//           </div>
//         </div>

//         <Link to="/Products">
//           <button onClick={dispatchSaveProduct}>Submit</button>
//         </Link>
//       </div>
//     </div>
//   );
// };
// export default AddProduct;
