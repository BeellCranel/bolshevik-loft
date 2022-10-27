import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalToggleHandler = () => {
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <div className="app">
      <Header
        modalIsOpen={modalIsOpen}
        modalToggleHandler={modalToggleHandler}
      />
      <Main />
    </div>
  );
};

export default App;
