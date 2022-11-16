import React from "react";
import "./MainPage.scss";
import {
  MainPageAffiche,
  MainPageGallery,
  MainPageHeader,
} from "../../components";

export const MainPage = ({ imagePopupOpenHandler }) => {
  return (
    <main>
      <MainPageHeader />
      <MainPageAffiche />
      <MainPageGallery imagePopupOpenHandler={imagePopupOpenHandler} />
    </main>
  );
};
