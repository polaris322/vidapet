import React from "react";
import Footer1 from "../components/footer/Footer1";
import Header1 from "../components/header/Header3";

function Layout({ children }) {
  return (
    <>
      <Header1 />
      {children}
      <Footer1 />
    </>
  );
}

export default Layout;
