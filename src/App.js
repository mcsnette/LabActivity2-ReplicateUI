import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Glasses from "./Glasses";
import Footer from "./Footer";

function App() {
  const [theme, setTheme] = useState("summer");

  const toggleTheme = () => {
    setTheme(theme === "summer" ? "winter" : "summer");
  };

  return (
    <div className={`App ${theme}`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Header theme={theme} />
      <Glasses />
      <Footer />
    </div>
  );
}

export default App;
