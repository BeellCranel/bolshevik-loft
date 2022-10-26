import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";

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
    </div>
  );
};

export default App;
