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
import Loader from "./components/navigation/Loader"; // Import the Loader component
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import WhitePaper from "./components/pages/WhitePaper";
import BlogPage from "./components/pages/BlogPage";

const App = () => {
  const [loading, setLoading] = useState(true); // State to control loader visibility
  const [isVisible, setIsVisible] = useState(true); // State to manage loader visibility class

  useEffect(() => {
    // Simulate a loading process (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsVisible(false); // Start fade-out animation
      // Hide loader after fade-out animation completes
      setTimeout(() => setLoading(false), 500); // Wait for 500ms for fade-out to finish
    }, 3000); // Show loader for 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <Router>
      <ToastContainer />
      {loading ? (
        <Loader isVisible={isVisible} /> // Show loader while loading
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
              <Route path='/Privacy-policy' element={<PrivacyPolicy />} />
              <Route path='/White-paper' element={<WhitePaper />} />
              <Route path='/BlogPage' element={<BlogPage />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
