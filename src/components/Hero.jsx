import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaShieldAlt, FaCheck } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Hero = () => {
  const benefits = [
    '24/7 Emergency Service',
    'Licensed & Insured Experts',
    'Satisfaction Guaranteed'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-r from-primary to-secondary overflow-hidden pt-20">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                #1 Rated Home Services
              </span>
            </motion.div>
            
            <h1 className="text-4xl md:text-4xl font-bold mb-6 leading-tight">
            Trusted Services in Plumbing, Sanitation, Bathroom Renovation, and Locksmithing
            </h1>
            <p className="text-xl md:text-1xl mb-8 text-gray-100">
            Fast, efficient, and lasting solutions for all your repair and renovation needs.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <FaCheck className="text-accent" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <FaShieldAlt />
                Get Free Quote
              </motion.button>
              <motion.a
                href="tel:0970704977"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                <FaPhoneAlt />
                Call Now
              </motion.a>
            </div>

            <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.8 }}
  className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg inline-block"
>
  <div className="flex items-center gap-4">
    {/* Profile Picture Circles */}
    <div className="flex -space-x-3">
      {[
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/45.jpg",
        "https://randomuser.me/api/portraits/men/54.jpg",
      ].map((imgSrc, i) => (
        <img
          key={i}
          src={imgSrc}
          alt="User"
          className="w-10 h-10 rounded-full border-2 border-white object-cover"
        />
      ))}
    </div>

    {/* Text Content */}
    <div className="font-semibold text-gray-800">
      <div className="text-blue-600">Trusted by 10,000+ customers</div>
      <div className="text-yellow-500 font-medium">★★★★★ (4.9/5)</div>
    </div>
  </div>
</motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-full opacity-20 animate-pulse delay-300"></div>
              <LazyLoadImage
                src="\image copy.png"
                alt="Professional plumber at work"
                effect="blur"
                className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;