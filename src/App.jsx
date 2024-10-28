import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import Brochure from "./components/brochure/Brochure";
import Program from "./components/program/Program";
import Careers from "./components/careers/Careers";
// Pages
import FaqPage from "./components/pages/FaqPage";
import ContactPage from "./components/pages/ContactPage";
import CareersPage from "./components/pages/CareersPage";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import Eligibility from "./components/eligibility/Eligibility";
import LearnMore from "./components/pages/LearnMore";
const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Header />
      <main>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Hero />
                <Brochure />
                <Program />
                <Eligibility />
                <Careers />
              </>
            }
          />
          <Route path='/LearnMore' element={<LearnMore />} />
          <Route path='/Careers' element={<CareersPage />} />
          <Route path='/Contact' element={<ContactPage />} />
          <Route path='/Faq' element={<FaqPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};
export default App;
