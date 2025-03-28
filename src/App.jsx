import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import AboutUs from './components/AboutUs';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            {/* Define all your routes here */}
            <Route path="/" element={
              <>
                <Hero />
                <HowItWorks />
                <Services />
                <AboutUs />
                <WhyChooseUs />
                <Testimonials />
                <ContactForm />
              </>
            } />
            <Route path="/aboutuspage" element={<AboutUsPage />} />
            <Route path="/servicespage" element={<ServicesPage/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
