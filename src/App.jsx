import React from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ParticlesContainer from "./components/Particles";
import AboutUs from "./pages/AboutUs";
import Vision from "./pages/Vision";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import Team from "./pages/Team";

const App = () => {
  return (
    <Router>
      <ReactLenis root>
        <ParticlesContainer />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <AboutUs />
                <Vision />
                <Services />
              </>
            }
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/our-team" element={<Team />} />
        </Routes>

        <Footer />
      </ReactLenis>
    </Router>
  );
};

export default App;
