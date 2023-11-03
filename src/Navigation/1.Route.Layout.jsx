// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Admin } from "../Components/Admin";


// const myRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//         < />
//     ),
//   },
//   {
//     path: "/admin",
//     element: (
//         <Admin />
//     ),
//   },
// ]);
// const MainRoute = () => {
//   return <RouterProvider router={myRouter} />;
// };
// export default MainRoute;


import { Outlet } from "react-router-dom";
import { Header } from "../Components/3.Header";
import { Footer } from "../Components/Footer";

const RouterLayout = () => (
  <>
    <Header/>
    <Outlet />
    <Footer/>
  </>
);

export default RouterLayout;







