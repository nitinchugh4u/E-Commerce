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







