import React from 'react';
import { motion } from 'framer-motion';
import { FaWrench, FaToilet, FaBath, FaKey, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: <FaWrench className="text-4xl text-primary" />,
      title: "Plumbing",
      description: "Expert plumbing solutions for all your home needs",
      features: ["Installation", "Repair", "maintenance of all your sanitary equipment"]
      
    },
    {
      icon: <FaToilet className="text-4xl text-primary" />,
      title: "Sanitation",
      description: "Professional Unclogging and Drain Cleaning services",
      features: ["Quick unclogging ", "pipe cleaning for a hassle-free system" ,"Drain Cleaning"]
    },
    {
      icon: <FaBath className="text-4xl text-primary" />,
      title: "Bathroom Renovation",
      description: "Transform your space with a modern and functional bathroom",
      features: ["Design Consultation", "Installation", "Finishing"]
    },
    {
      icon: <FaKey className="text-4xl text-primary" />,
      title: "Locksmith Services",
      description: "Emergency locksmith assistance and secure lock installation",
      features: ["Lock Repair", "Key Cutting", "Security Upgrades"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer a complete range of services to meet all your needs in plumbing, sanitation, bathroom renovation, and locksmith services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex justify-center mb-6">
              <div className="p-4 bg-gray-100 rounded-full group-hover:bg-gray-400 group-hover:text-white transition-all duration-300">

                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                {service.description}
              </p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <FaArrowRight className="text-primary mr-2 text-sm" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="/servicespage"
                className="w-full btn-secondary inline-block text-center"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;