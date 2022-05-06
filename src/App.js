import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
// import Navbars2 from "./Components/Navbars/Navbars2";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import SkilExper from "./Components/SkilExper/SkilExper";
import Navbars2 from "./Components/Navbars/Navbars2";
import Projects from "./Components/Projects/Projects";
import Notice from './Components/Notice/Notice'

const App = () => {
  return (
    <section className="app">
      <div className="container mt-4 p-2 P-5 mt-5">
        <Navbars2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="SkilExper" element={<SkilExper />} />
          <Route path="Projects" element={<Projects />} />
       <Route path="Notice" element={<Notice />} />
       
        </Routes>
      </div>

        <Footer />
    </section>
  );
};

export default App;
