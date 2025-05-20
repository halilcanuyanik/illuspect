import React, { useState, useEffect } from "react";
import "./App.css";
import LoadingBar from "./components/LoadingBar";
import NavBar from "./components/NavBar";
import ModalWindow from "./components/ModalWindow";
import SplashScreen from "./components/SplashScreen";
import Adversaries from "./components/Adversaries";
import Daily from "./components/Daily";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timer;
    if (isLoading) {
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isLoading]);

  const handleOptionClick = () => {
    setIsLoading(true);
  };

  return (
    <div className="App">
      <LoadingBar isLoading={isLoading} />
      <NavBar onOptionClick={handleOptionClick} />
      <SplashScreen />
      <Adversaries />
      <Daily />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
