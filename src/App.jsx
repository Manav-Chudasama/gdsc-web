import React from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ParticlesContainer from "./components/Particles";
import AboutUs from "./pages/AboutUs";
import Vision from "./pages/Vision";
import Services from "./pages/Services";

const App = () => {
  // const lenis = useLenis(({ scroll }) => {});

  return (
    <ReactLenis root>
      <ParticlesContainer />
      <Navbar />
      <Home />
      <AboutUs />
      <Vision />
      <Services />
    </ReactLenis>
  );
};

export default App;
