import React from "react";
import Header from "./Componentss/Components/1.Header";

import Footer from "./Componentss/Components/2.Footer";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Header />
      <Outlet />

      <Footer />
    </div>
  );
};
