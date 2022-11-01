import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalOpenHandler = () => {
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = "fixed";
    document.body.style.width = "100vw";
    setModalIsOpen(true);
  };
  const modalCloseHandler = () => {
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    setModalIsOpen(false);
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  };

  return (
    <div className="app">
      <Header
        modalIsOpen={modalIsOpen}
        modalOpenHandler={modalOpenHandler}
        modalCloseHandler={modalCloseHandler}
      />
      <Main modalIsOpen={modalIsOpen} />
      <Footer />
    </div>
  );
};

export default App;
