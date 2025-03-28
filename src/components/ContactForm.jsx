import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser"; 

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await emailjs.send(
        "service_50pl2st", // Replace with your EmailJS Service ID
        "template_so1s9tw", // Replace with your EmailJS Template ID
        data,
        "JA6iQQZjAiMnf2hOk" // Replace with your EmailJS Public Key
      );

      alert("Message sent successfully!");
      console.log("SUCCESS!", response.status, response.text);
    } catch (error) {
      alert("Failed to send message.");
      console.error("FAILED...", error);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for all your home service needs.
          </p>
        </motion.div>

        {/* Form & Map Section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-gray-100 p-6 rounded-lg shadow-md">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  {...register("name", { required: true })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  type="text"
                />
                {errors.name && <span className="text-red-500">Name is required</span>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  type="email"
                />
                {errors.email && <span className="text-red-500">Valid email is required</span>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  {...register("message", { required: true })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  rows="4"
                ></textarea>
                {errors.message && <span className="text-red-500">Message is required</span>}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17870.0857486724!2d2.32500447195006!3d48.88119358535371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fb31781d965%3A0xd0edbb0e2ddf6504!2sL'Atelier%20des%20Batignolles!5e0!3m2!1sen!2sin!4v1742991186096!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
