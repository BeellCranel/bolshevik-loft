import React from "react";
// import Messengers from "../../UI/Messengers/Messengers";
import "./Main.css";
import MainPageAffiche from "./MainPageAffiche/MainPageAffiche";
import MainPageGallery from "./MainPageGallery/MainPageGallery";
import MainPageHeader from "./MainPageHeader/MainPageHeader";

const Main = () => {
  return (
    <main>
      <MainPageHeader />
      <MainPageAffiche />
      <MainPageGallery />
    </main>
  );
};

export default Main;
