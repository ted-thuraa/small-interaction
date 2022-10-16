import React, { useEffect } from 'react';
import { gsap } from "gsap";
import Header from './components/header';
import './styles/App.scss';
import Home from './pages/home';

function App() {
  useEffect(() => {
    //Grab inner height of window for mobile reasons when dealing with vh
    let vh = window.innerHeight * 0.01;
    //Set css varible vh
    document.documentElement.style.setProperty("--vh", `${vh}px`);


     // Preventing flash from happening.
     gsap.to("body", 0, { css: { visibility: "visible" } });
  });
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
