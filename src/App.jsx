import React from "react";
// import Logo from '../logo/logo_kasa.png';
import "./css/App.scss";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Logement } from "./pages/logement/logement";
import { Layout } from "./components/layout/layout";
import { Error } from "./pages/error/error";
import { Footer } from "./components/footer/footer";

export const App = () => {
  return (
    <>
      <div className="App">
        <div className="main-container">
          <Layout />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/logement/:id" element={<Logement />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
};

