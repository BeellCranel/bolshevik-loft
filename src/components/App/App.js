import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { AffichePage, MainPage, TermsPage } from "../../pages";
import { ImagePopup, Layout, OfferPopup } from "../";

export const App = () => {
  // состояния модальных окон
  const [navPopupOpen, setNavPopupOpen] = useState(false);
  const [imagePopupOpen, setImagePopupOpen] = useState(false);
  const [offerPopupOpen, setOfferPopupOpen] = useState(false);
  const [scrollY, setScrollY] = useState();
    

  // обработчики модальных окон
  const bodyFixHandler = () => {
    setScrollY(`-${window.scrollY}px`);
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
  const bodyFixClosePopup = () => {
    document.body.style.height = "";
    document.body.style.minHeight = "";
    document.body.style.overflow = "";
    setNavPopupOpen(false);
    setImagePopupOpen(false);
    setOfferPopupOpen(false);
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  };
  const closeNavPopup = () => {
    document.body.style.height = "";
    document.body.style.minHeight = "";
    document.body.style.overflow = "";
    setNavPopupOpen(false);
    window.scrollTo(0, 0);
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
              modalCloseHandler={bodyFixClosePopup}
              closeNavPopup={closeNavPopup}
            />
          }
        >
          <Route
            index
            element={<MainPage imagePopupOpenHandler={imagePopupOpenHandler} />}
          />
          <Route path="affiche" element={<AffichePage />} />
          <Route
            path="terms"
            element={
              <TermsPage offerPopupOpenHandler={offerPopupOpenHandler} />
            }
          />
        </Route>
      </Routes>
      <ImagePopup isOpen={imagePopupOpen} onClose={bodyFixClosePopup} />
      <OfferPopup
        isOpen={offerPopupOpen}
        onClose={bodyFixClosePopup}
      />
    </div>
  );
};
