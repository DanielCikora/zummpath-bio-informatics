import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import Brochure from "./components/brochure/Brochure";
import Program from "./components/program/Program";
import Careers from "./components/careers/Careers";
// Pages
import FaqPage from "./components/pages/FaqPage";
import ContactPage from "./components/pages/ContactPage";
import AboutPage from "./components/pages/AboutPage";
import CareersPage from "./components/pages/CareersPage";
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
                <Program />
                <Careers />
              </>
            }
          />
          {/* Other routes */}
          <Route path='/About' element={<AboutPage />} />
          <Route path='/Careers' element={<CareersPage />} />
          <Route path='/Contact' element={<ContactPage />} />
          <Route path='/Faq' element={<FaqPage />} />
        </Routes>
      </main>
    </Router>
  );
};
export default App;
