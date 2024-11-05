// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react"; // Import useState and useEffect
import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import Brochure from "./components/brochure/Brochure";
import Program from "./components/program/Program";
import Careers from "./components/careers/Careers";
// Pages
import FaqPage from "./components/pages/FaqPage";
import ContactPage from "./components/pages/ContactPage";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import Eligibility from "./components/eligibility/Eligibility";
import LearnMore from "./components/pages/LearnMore";
import Loader from "./components/navigation/Loader";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import BlogPage from "./components/pages/BlogPage";
import WhitePaper from "./components/pages/WhitePaper";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => setLoading(false), 500);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <ToastContainer />
      {loading ? (
        <Loader isVisible={isVisible} />
      ) : (
        <>
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
              <Route path='/Contact' element={<ContactPage />} />
              <Route path='/Faq' element={<FaqPage />} />
              <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
              <Route path='/BlogPage' element={<BlogPage />} />
              <Route path='/WhitePaper' element={<WhitePaper />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </Router>
  );
};
export default App;
