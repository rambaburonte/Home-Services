import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'How It Works', to: 'how-it-works' },
    { name: 'About', to: 'about-us' },
    { name: 'Contact', to: 'contact' }
  ];
  const navbarColor =
  location.pathname === '/aboutuspage'
    ? 'bg-blue-600 text-white py-2 top-0' // About Us Page Style (Always White)
    : isScrolled
    ? 'bg-white text-black py-2 top-0' // Scrolled Style
    : 'bg-transparent text-white py-4 top-10'; // Default Style


  return (
    <>
    
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="tel:0970704977" className="flex items-center space-x-2 hover:text-accent transition-colors">
                <FaPhoneAlt className="text-sm" />
                <span>0970704977</span>
              </a>
              <div className="flex items-center space-x-2 hover:text-accent transition-colors cursor-pointer">
                <FaMapMarkerAlt className="text-sm" />
                <span>Find a Location</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#login" className="hover:text-accent transition-colors">Login</a>
              <a href="#register" className="hover:text-accent transition-colors">Register</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarColor  }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.a
              href="/"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-2xl font-bold ${
                isScrolled ? 'text-primary' : 'text-white'
              }${navbarColor} `}
            >
             Aubert Arnaud & Rozel Compagnie
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`cursor-pointer ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }${navbarColor} hover:text-accent transition-colors font-medium`}
                >
                  {item.name}
                </Link>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get a Quote
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? 
                <FaTimes className={isScrolled ? 'text-primary' : 'text-white'} /> : 
                <FaBars className={isScrolled ? 'text-primary' : 'text-white'} />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white shadow-lg"
            >
              <div className="container mx-auto px-4 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="block py-3 text-gray-700 hover:text-accent transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <button className="w-full btn-primary mt-4">
                  Get a Quote
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;