import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ImagePopup from "../ImagePopup/ImagePopup";

const App = () => {
  const [navPopupOpen, setNavPopupOpen] = useState(false);
  const [imagePopupOpen, setImagePopupOpen] = useState(false);

  const bodyFixHandler = () => {
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = "fixed";
    document.body.style.width = "100vw";
  };
  const navPopupOpenHandler = () => {
    bodyFixHandler();
    setNavPopupOpen(true);
  };
  const imagePopupOpenHandler = () => {
    bodyFixHandler();
    setImagePopupOpen(true);
  };
  const allModalCloseHandler = () => {
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    setNavPopupOpen(false);
    setImagePopupOpen(false);
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  };

  return (
    <div className="app">
      <Header
        modalIsOpen={navPopupOpen}
        modalOpenHandler={navPopupOpenHandler}
        modalCloseHandler={allModalCloseHandler}
      />
      <Main imagePopupOpenHandler={imagePopupOpenHandler} />
      <Footer />
      <ImagePopup
        isOpen={imagePopupOpen}
        onOpen={imagePopupOpenHandler}
        onClose={allModalCloseHandler}
      />
    </div>
  );
};

export default App;
