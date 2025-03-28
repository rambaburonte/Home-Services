import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaUserTie, FaShieldAlt, FaMoneyBillWave } from 'react-icons/fa';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <FaClock className="text-4xl text-primary" />,
      title: "24/7 Availability",
      description: "Round-the-clock service for emergencies"
    },
    {
      icon: <FaUserTie className="text-4xl text-primary" />,
      title: "Expert Team",
      description: "Highly skilled and certified professionals"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary" />,
      title: "Guaranteed Work",
      description: "100% satisfaction guarantee on all services"
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-primary" />,
      title: "Competitive Pricing",
      description: "Fair and transparent pricing structure"
    }
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our professional service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;