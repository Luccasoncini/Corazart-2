import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { WhatsButton } from "./components/WhatsButton";
import { Fragment } from "react";
import { useGifState } from "./hooks/useGifState";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  const [classes, setClasses] = useState();
  const { gifFinished, setGifFinished } = useGifState();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/contact" || location.pathname === "/about") {
      setClasses(true);
    } else {
      setClasses(false);
    }
  }, [location]);

  return (
    <main
      className={
        classes ? "lg:h-[100vh] flex flex-col items-center justify-between" : ""
      }
    >
      <div className="absolute">
        <ToastContainer autoClose={2000} hideProgressBar={true} />
      </div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {gifFinished && (
        <Fragment>
          <WhatsButton />
          <Footer />
        </Fragment>
      )}
    </main>
  );
}
