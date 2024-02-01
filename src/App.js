import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Glasses from "./Glasses";
import Popup from "./Popup";
import Details from "./Details";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Glasses />
      <Footer />
    </div>
  );
}

export default App;
