import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductViewModal from "../components/ProductViewModal";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div>{children}</div>
      </div>
      <ProductViewModal />  
      <Footer />
    </div>
  );
};

export default DefaultLayout;
