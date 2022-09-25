import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Herro from "../components/Herro/Herro";
import Blog from "../components/Blog/Blog";

const Layout = ({}) => {
  return (
    <div className="container">
      <Header />
      <Herro />
      <Footer />
    </div>
  );
};

export default Layout;