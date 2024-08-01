import React from 'react';
import { motion } from 'framer-motion';
import { reveal } from '../utils/Animation';

// Define scroll animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {

  const animationStart = 0.5;
  
  return (
    <motion.section
      id='services'
      layout
      initial={{ height: 0 }}
      animate={{ height: 'unset' }}
      transition={{ delay: animationStart, duration: 0.2 }}
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 0.5, duration: 0.2 }}
        className="container mx-auto px-4 md:px-6"
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm text-gray-700">Our Services</div>
            <motion.h2
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: animationStart + 0.5, duration: 0.2 }}
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              Comprehensive Legal Solutions
            </motion.h2>
            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: animationStart + 0.7, duration: 0.2 }}
              className="max-w-4xl text-gray-600 md:text-xl lg:text-base"
            >
              Hafiz Legal Solutions offers a wide range of legal services to individuals and businesses, including litigation,
              corporate law, real estate, and more. Our team of experts is dedicated to providing tailored solutions to
              meet your unique needs.
            </motion.p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="grid gap-1">
            <motion.h3
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: animationStart + 0.9, duration: 0.2 }}
              className="text-xl font-bold"
            >
              Litigation
            </motion.h3>
            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: animationStart + 1.1, duration: 0.2 }}
              className="text-gray-600"
            >
              Our experienced litigators handle a wide range of civil and criminal cases, including personal injury,
              business disputes, and more.
            </motion.p>
          </div>
          <div className="grid gap-1">
            <motion.h3
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: animationStart + 1.3, duration: 0.2 }}
              className="text-xl font-bold"
            >
              Corporate Law
            </motion.h3>
            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: animationStart + 1.5, duration: 0.2 }}
              className="text-gray-600"
            >
              We provide comprehensive legal services for businesses, including entity formation, contract drafting, and
              mergers and acquisitions.
            </motion.p>
          </div>
          <div className="grid gap-1">
            <motion.h3
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: animationStart + 1.7, duration: 0.2 }}
              className="text-xl font-bold"
            >
              Real Estate
            </motion.h3>
            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: animationStart + 1.9, duration: 0.2 }}
              className="text-gray-600"
            >
              Our real estate attorneys assist clients with residential and commercial transactions, zoning and land use
              issues, and property disputes.
            </motion.p>
          </div>
          <div className="grid gap-1">
            <motion.h3
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: animationStart + 2.1, duration: 0.2 }}
              className="text-xl font-bold"
            >
              Estate Planning
            </motion.h3>
            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: animationStart + 2.3, duration: 0.2 }}
              className="text-gray-600"
            >
              We help clients create comprehensive estate plans, including wills, trusts, and power of attorney documents.
            </motion.p>
          </div>
          <div className="grid gap-1">
            <motion.h3
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: animationStart + 2.5, duration: 0.2 }}
              className="text-xl font-bold"
            >
              Family Law
            </motion.h3>
            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: animationStart + 2.7, duration: 0.2 }}
              className="text-gray-600"
            >
              Our family law attorneys handle a variety of matters, such as divorce, child custody, and adoption.
            </motion.p>
          </div>
          <div className="grid gap-1">
            <motion.h3
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: animationStart + 2.9, duration: 0.2 }}
              className="text-xl font-bold"
            >
              Employment Law
            </motion.h3>
            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: animationStart + 3.1, duration: 0.2 }}
              className="text-gray-600"
            >
              We advise clients on employment-related issues, including discrimination, harassment, and wrongful termination.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
