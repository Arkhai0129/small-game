import React from "react";
import Header from "./components/Header";
import "./App.css";
import MainComponent from "./components/MainComponent";

const App = () => {
  return (
    <>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <MainComponent game="hello" />
        </main>
      </div>
    </>
  );
};

export default App;
