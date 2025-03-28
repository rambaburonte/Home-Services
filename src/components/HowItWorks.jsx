import React from 'react';
import { motion } from 'framer-motion';
import { FaClipboardList, FaTools, FaCheckCircle } from 'react-icons/fa';
import { FaShieldAlt } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaClipboardList className="text-4xl text-primary" />,
      title: "Request a Quote ",
      description: "Contact us via phone or online form"
    },
    {
      icon: <FaTools className="text-4xl text-primary" />,
      title: "Personalized Evaluation ",
      description: "We analyze your needs and provide a tailored solution"
    },
    {
      icon: <FaCheckCircle className="text-4xl text-primary" />,
      title: "Fast Intervention",
      description: "Our team quickly resolves your issue"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary" />,
      title: "Guaranteed Satisfaction",
      description: "Follow-up and warranty on all services"
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We make getting your home services done simple and hassle-free
          </p>
        </motion.div>

        {/* <div className="grid md:grid-cols-3 gap-8"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-6 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;