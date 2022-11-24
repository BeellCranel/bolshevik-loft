import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import {
  AffichePage,
  CharacteristicsPage,
  ContactsPage,
  MainPage,
  ParkingPage,
  TermsPage,
} from "../../pages";
import {
  ImagePopup,
  Layout,
  OfferPopup,
  PresentationPopup,
  RiderPopup,
} from "../";

export const App = () => {
  // состояния модальных окон
  const [navPopupOpen, setNavPopupOpen] = useState(false);
  const [riderPopupOpen, setRiderPopupOpen] = useState(false);
  const [imagePopupOpen, setImagePopupOpen] = useState(false);
  const [offerPopupOpen, setOfferPopupOpen] = useState(false);
  const [presentationPopupOpen, setPresentationPopupOpen] = useState(false);
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
  const presentationPopupOpenHandler = () => {
    bodyFixHandler();
    setPresentationPopupOpen(true);
  };
  const riderPopupOpenHandler = () => {
    bodyFixHandler();
    setRiderPopupOpen(true);
  };
  const bodyFixClosePopup = () => {
    document.body.style.height = "";
    document.body.style.minHeight = "";
    document.body.style.overflow = "";
    setNavPopupOpen(false);
    setImagePopupOpen(false);
    setOfferPopupOpen(false);
    setPresentationPopupOpen(false);
    setRiderPopupOpen(false);
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  };
  const closeNavPopup = () => {
    document.body.style.height = "";
    document.body.style.minHeight = "";
    document.body.style.overflow = "";
    setNavPopupOpen(false);
    setImagePopupOpen(false);
    setOfferPopupOpen(false);
    setPresentationPopupOpen(false);
    setRiderPopupOpen(false);
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
            element={
              <MainPage
                imagePopupOpenHandler={imagePopupOpenHandler}
                closeNavPopup={closeNavPopup}
              />
            }
          />
          <Route path="affiche" element={<AffichePage />} />
          <Route
            path="terms"
            element={
              <TermsPage
                offerPopupOpenHandler={offerPopupOpenHandler}
                presentationPopupOpenHandler={presentationPopupOpenHandler}
                bodyFixClosePopup={bodyFixClosePopup}
              />
            }
          />
          <Route
            path="characteristics"
            element={
              <CharacteristicsPage
                presentationPopupOpenHandler={presentationPopupOpenHandler}
                riderPopupOpenHandler={riderPopupOpenHandler}
              />
            }
          />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="parking" element={<ParkingPage />} />
        </Route>
      </Routes>
      <ImagePopup isOpen={imagePopupOpen} onClose={bodyFixClosePopup} />
      <OfferPopup isOpen={offerPopupOpen} onClose={bodyFixClosePopup} />
      <PresentationPopup
        isOpen={presentationPopupOpen}
        onClose={bodyFixClosePopup}
      />
      <RiderPopup isOpen={riderPopupOpen} onClose={bodyFixClosePopup} />
    </div>
  );
};
