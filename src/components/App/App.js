import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import ImagePopup from "../ImagePopup/ImagePopup";
import Affiche from "../Affiche/Affiche";
import Layout from "../Layout/Layout";
import Terms from "../Terms/Terms";
import OfferPopup from "../OfferPopup/OfferPopup";

const App = () => {
  const [navPopupOpen, setNavPopupOpen] = useState(false);
  const [imagePopupOpen, setImagePopupOpen] = useState(false);
  const [offerPopupOpen, setOfferPopupOpen] = useState(false);
  const [scrollY, setScrollY] = useState();

  const bodyFixHandler = () => {
    // document.body.style.top = `-${window.scrollY}px`;
    // document.body.style.position = "fixed";
    setScrollY(`-${window.scrollY}px`)
    document.body.style.height = "100vh";
    document.body.style.minHeight = "100vh";
    document.body.style.overflow = "hidden";
  };
  const navPopupOpenHandler = () => {
    bodyFixHandler();
    setNavPopupOpen(true);
  };
  const imagePopupOpenHandler = () => {
    bodyFixHandler();
    setImagePopupOpen(true);
  };
  const offerPopupOpenHandler = () => {
    bodyFixHandler();
    setOfferPopupOpen(true);
  };
  const allModalCloseHandler = () => {
    // const scrollY = document.body.style.top;
    // document.body.style.position = "";
    // document.body.style.top = "";
    // document.body.style.width = "";
    document.body.style.height = "";
    document.body.style.minHeight = "";
    document.body.style.overflow = "";
    setNavPopupOpen(false);
    setImagePopupOpen(false);
    setOfferPopupOpen(false);
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
          <Route
            path="terms"
            element={<Terms offerPopupOpenHandler={offerPopupOpenHandler} />}
          />
        </Route>
      </Routes>
      <ImagePopup isOpen={imagePopupOpen} onClose={allModalCloseHandler} />
      <OfferPopup isOpen={offerPopupOpen} onClose={allModalCloseHandler} />
    </div>
  );
};

export default App;
