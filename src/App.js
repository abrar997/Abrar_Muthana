import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
// import Navbars2 from "./Components/Navbars/Navbars2";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import SkilExper from "./Components/SkilExper/SkilExper";
import Navbars2 from "./Components/Navbars/Navbars2";
const App = () => {
  return (
    <section className="app">
      <div className="container mt-4 pb-2 P-5 mt-5">
        <Navbars2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="SkilExper" element={<SkilExper />} />
        </Routes>
        <Footer />
      </div>
    </section>
  );
};

export default App;
