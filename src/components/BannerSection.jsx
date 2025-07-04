import React from 'react';
import { motion } from 'framer-motion';

const BannerSection = () => {
  return (
    <section
      id="about"
      className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                About Our Firm
              </span>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-gray-900 leading-tight">
                Trusted <span className="text-blue-600">Legal Expertise</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-[600px] leading-relaxed">
                TaxLogicx Law Firm provides comprehensive legal services to individuals and businesses. 
                Our team of experienced attorneys is dedicated to delivering exceptional results.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Contact Us
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="inline-flex items-center justify-center px-8 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300"
              >
                Our Services
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="assets/image-2.jpg"
              width="600"
              height="600"
              alt="Legal team meeting"
              className="w-full h-auto rounded-xl shadow-xl object-cover aspect-square"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;