import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import ImagePopup from "../ImagePopup/ImagePopup";
import Affiche from "../Affiche/Affiche";
import Layout from "../Layout/Layout";

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
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              modalIsOpen={navPopupOpen}
              modalOpenHandler={navPopupOpenHandler}
              modalCloseHandler={allModalCloseHandler}
            />
          }
        >
          <Route
            index
            element={<Main imagePopupOpenHandler={imagePopupOpenHandler} />}
          />
          <Route path="affiche" element={<Affiche />} />
        </Route>
      </Routes>
      <ImagePopup
        isOpen={imagePopupOpen}
        onOpen={imagePopupOpenHandler}
        onClose={allModalCloseHandler}
      />
    </div>
  );
};

export default App;
