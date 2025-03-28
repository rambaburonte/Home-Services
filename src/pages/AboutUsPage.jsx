import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaRegSmileBeam, FaMedal } from "react-icons/fa";
import { Link } from 'react-scroll';

const AboutUsPage = () => {
  // Updated Team Data with Pravatar Random Images
  const teamMembers = [
    {
      name: "Arnaud Dubois",
      role: "Founder & CEO",
      image: "https://i.pravatar.cc/200?img=8",
    },
    {
      name: "Sophie Martin",
      role: "Lead Engineer",
      image: "https://i.pravatar.cc/200?img=5",
    },
    {
      name: "Jean-Pierre Lefevre",
      role: "Senior Plumber",
      image: "https://i.pravatar.cc/200?img=17",
    },
    {
      name: "Isabelle Moreau",
      role: "Customer Relations Manager",
      image: "https://i.pravatar.cc/200?img=20",
    },
  ];

return (
    <div className="min-h-screen bg-white text-gray-800 py-16">
            <br/><br/><br/><br/>
        {/* Hero Section */}
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
        >
            <h1 className="text-5xl font-bold text-blue-600 mb-4">About Us</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Aubert Arnaud & Rozel Compagnie delivers expert plumbing, sanitation, 
                bathroom renovation, and locksmith services with speed, quality, and competitive pricing.
            </p>
        </motion.div>

        {/* Why Choose Us */}
        <div className="bg-blue-50 py-16 mt-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Choose Us?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <FaHandshake className="text-blue-600 text-5xl" />,
                            title: "Trusted by Thousands",
                            description: "Our long-standing reputation and satisfied customers speak for us.",
                        },
                        {
                            icon: <FaRegSmileBeam className="text-blue-600 text-5xl" />,
                            title: "Customer-Centric Approach",
                            description: "We prioritize customer satisfaction with every service.",
                        },
                        {
                            icon: <FaMedal className="text-blue-600 text-5xl" />,
                            title: "Certified & Experienced",
                            description: "Our team consists of certified professionals with years of experience.",
                        },
                    ].map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <div className="mb-4">{benefit.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                            <p className="text-gray-700 mt-2">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

        {/* Meet Our Team */}
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Meet Our Experts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="rounded-full w-32 h-32 mb-4 border-4 border-blue-600"
                            />
                            <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                            <p className="text-gray-600 mt-2">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
            <Link to="\component\contact" spy={true} smooth={true} duration={500} 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 
            transition-transform transform hover:scale-105 cursor-pointer">
                Get in Touch with Us
            </Link>
        </div>
    </div>
);
};

export default AboutUsPage;
