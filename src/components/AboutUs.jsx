import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaUserTie, FaShieldAlt, FaMoneyBillWave,FaCheckCircle} from 'react-icons/fa';
import { FaBolt } from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();
  const benefits = [
    {
      icon: <FaCheckCircle className="text-blue-600 text-5xl" />,
      title: "High-Quality",
      description: "Providing durable, precise, and excellent home services.",
    },
    {
      icon: <FaBolt className="text-blue-600 text-5xl" />,
      title: "Fast",
      description: "Quick, reliable home services with rapid response and efficiency.",
    },
    {
      icon: <FaCheckDouble className="text-blue-600 text-5xl" />,
      title: "Efficient Services ",
      description: "Optimized, reliable home services for maximum efficiency.",
    },
    {
      icon: <FaMoneyBillWave className="text-blue-600 text-5xl" />,
      title: "Transparent Pricing",
      description: "No hidden fees, just honest and competitive pricing.",
    },
  ];

  return (
    <section id="about-us" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Aubert Arnaud & Rozel Compagnie delivers expert plumbing, sanitation, bathroom renovation, and locksmith services with speed, quality, and competitive pricing.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 mt-2">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Image / Visual Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <img
              src="public\image.png"
              alt="About Us"
              className="rounded-xl shadow-lg w-full max-w-md lg:max-w-lg"
            />
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/aboutuspage"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md 
            hover:bg-blue-700 transition-transform transform hover:scale-105"
          >
            Learn More About Us
          </a>
          {/* <button onClick={()=>navigate('/raj')}>GO</button> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
