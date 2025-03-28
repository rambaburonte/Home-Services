import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const services = [
  {
    title: "Professional Plumbing - Installation & Repair",
    description: "Ensure your home's plumbing system runs smoothly with our expert installation and repair services. We handle everything from leaks to complete pipe replacements, ensuring long-term reliability.",
    details: [
      "Faucet, water heater, and piping installation.",
      "Leak detection and pipe repairs.",
      "Heating system troubleshooting.",
      "Preventive maintenance to avoid water damage."
    ],
    image: "https://source.unsplash.com/800x600/?plumbing"
  },
  {
    title: "Sanitation & Drain Cleaning - Your Anti-Clogging Solution",
    description: "Clogged drains and pipes can lead to major disruptions. Our sanitation services ensure a clean and smooth-flowing system using the latest equipment and eco-friendly solutions.",
    details: [
      "Unclogging of pipes and drainage systems.",
      "High-pressure drain cleaning.",
      "Video inspection for diagnosing blockages.",
      "Preventive maintenance for long-term solutions."
    ],
    image: "https://source.unsplash.com/800x600/?cleaning"
  },
  {
    title: "Complete Bathroom Renovation & Custom Design",
    description: "Transform your bathroom into a modern, stylish, and functional space. We offer complete renovation solutions tailored to your preferences and budget.",
    details: [
      "Tailor-made designs using high-quality materials.",
      "Installation of tiles, plumbing, and sanitary fixtures.",
      "Modernization of taps and shower systems.",
      "Complete layout redesigns for a fresh new look."
    ],
    image: "https://source.unsplash.com/800x600/?bathroom"
  },
  {
    title: "Professional Locksmith Services - Secure Your Home",
    description: "Your home’s security is our priority. Whether you’re locked out or need high-security lock installations, we provide rapid and reliable locksmith services.",
    details: [
      "Quick emergency response for locked doors.",
      "High-security lock installation and replacement.",
      "Repair of damaged locks and key duplication.",
      "Reinforcement of doors and window security."
    ],
    image: "https://source.unsplash.com/800x600/?locksmith"
  }
];

const ServicesPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white">
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold">Our Services</h1>
        <p className="mt-4 text-lg">Providing quality home services for your comfort and security</p>
      </header>
      
      {services.map((service, index) => (
        <section key={index} className={`relative flex flex-col md:flex-row items-center justify-center px-6 lg:px-20 py-16 ${index % 2 === 0 ? 'bg-gray-100 text-gray-900' : 'bg-white text-gray-800'}`}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl flex flex-col md:flex-row items-center"
          >
            <img src={service.image} alt={service.title} className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md" />
            <div className="md:ml-10 mt-6 md:mt-0 text-center md:text-left">
              <h2 className="text-4xl font-bold">{service.title}</h2>
              <p className="text-lg mt-4">{service.description}</p>
              <ul className="mt-6 text-lg space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheckCircle className="text-blue-600 mr-3 text-xl" /> {detail}
                  </li>
                ))}
              </ul>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">Learn More</button>
            </div>
          </motion.div>
        </section>
      ))}
    </div>
  );
};

export default ServicesPage;
