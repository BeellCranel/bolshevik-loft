import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ modalIsOpen, modalOpenHandler, modalCloseHandler }) => {
  return (
    <>
      <Header
        modalIsOpen={modalIsOpen}
        modalOpenHandler={modalOpenHandler}
        modalCloseHandler={modalCloseHandler}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
