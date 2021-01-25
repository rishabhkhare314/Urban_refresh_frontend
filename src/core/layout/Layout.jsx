import React from "react";
import Header from "../../shared/components/header/Header";
import Footer from "../../shared/components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
