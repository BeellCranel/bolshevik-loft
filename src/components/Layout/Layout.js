import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../";

export const Layout = ({
  modalIsOpen,
  modalOpenHandler,
  modalCloseHandler,
  closeNavPopup,
}) => {
  return (
    <>
      <Header
        modalIsOpen={modalIsOpen}
        modalOpenHandler={modalOpenHandler}
        modalCloseHandler={modalCloseHandler}
        closeNavPopup={closeNavPopup}
      />
      <Outlet />
      <Footer />
    </>
  );
};
