import React from 'react';
import { motion } from 'framer-motion';
import image1 from '../../public/assets/image-1.jpg';

const FeatureSection = () => {
  const post = {
    image: image1,
    title: 'Expert Tax Advisory Services',
    description: 'Specialized in providing comprehensive tax planning and legal representation to ensure optimal financial outcomes. From personal tax issues to complex corporate tax strategies, we deliver tailored solutions to meet your needs.',
    cta: 'Schedule Consultation'
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative mx-4 my-12 rounded-xl overflow-hidden shadow-xl"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src={post.image} 
          alt="Tax advisory services"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 p-8 md:p-12 lg:p-16 max-w-2xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
            {post.description}
          </p>
          <a href="#contact">
            <button className="px-8 py-3 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
              {post.cta}
            </button>
          </a>
        </motion.div>
      </div>

      {/* Accent element */}
      {/* <div className="absolute bottom-0 left-0 h-1 w-24 bg-yellow-400"></div> */}
    </motion.div>
  );
};

export default FeatureSection;