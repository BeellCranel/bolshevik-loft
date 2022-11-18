import React from "react";
import "./MainPage.scss";
import {
  MainPageAffiche,
  MainPageGallery,
  MainPageHeader,
} from "../../components";

export const MainPage = ({ imagePopupOpenHandler, closeNavPopup }) => {
  return (
    <main>
      <MainPageHeader />
      <MainPageAffiche closeNavPopup={closeNavPopup} />
      <MainPageGallery imagePopupOpenHandler={imagePopupOpenHandler} />
    </main>
  );
};
