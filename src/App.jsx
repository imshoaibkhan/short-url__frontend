import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import TermsConditions from "./pages/terms-condition/TermsConditions";

function ScrollToTop() {
  const navigate = useNavigate();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    scrollToTop();
  }, [navigate]); 

  return null;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-conditions" element={<TermsConditions />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
