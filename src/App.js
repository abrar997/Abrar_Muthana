import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbars from "./Components/Navbars/Navbars";
import "./App.css";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <section className="conatiner app">
      <div
        className="container mt-3"
        style={{ boxShadow: "1px 1px 17px gray" }}
      >
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </section>
  );
};

export default App;
