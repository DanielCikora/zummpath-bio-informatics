import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Brochure from "./components/brochure/Brochure";
import Header from "./components/Header";
import Hero from "./components/hero/Hero";
// Pages
import About from "./components/pages/About";
import Careers from "./components/pages/Careers";
import Contact from "./components/pages/Contact";
import Faq from "./components/pages/Faq";
const App = () => {
  return (
    <Router>
      <Header /> {/* Header is outside Routes, so it appears on all pages */}
      <main>
        <Routes>
          {/* Home route with Hero and Brochure */}
          <Route
            path='/'
            element={
              <>
                <Hero />
                <Brochure />
              </>
            }
          />
          {/* Other routes */}
          <Route path='/About' element={<About />} />
          <Route path='/Careers' element={<Careers />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Faq' element={<Faq />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
