import React from 'react';
import PropTypes from "prop-types";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { animationStart, reveal } from '../utils/Animation';

const year = new Date().getFullYear();

const Footer = ({ title, description, socials, menus, copyright }) => {
  return (
    <motion.footer
      layout
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      transition={{ delay: animationStart, duration: 0.8 }}
      className="bg-gray-900 text-white pt-16 pb-8"
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 0.5, duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.h4 
              whileHover={{ scale: 1.02 }}
              className="text-3xl font-bold mb-6 text-white"
            >
              {title}
            </motion.h4>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {description}
            </p>
            <div className="flex space-x-6">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.facebook.com/hafizlastc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <FaFacebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.instagram.com/h_lastc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </div>

          {/* Footer Links */}
          {menus.map(({ name, items }) => (
            <div key={name} className="space-y-4">
              <h5 className="text-lg font-semibold text-white uppercase tracking-wider">
                {name}
              </h5>
              <ul className="space-y-3">
                {items.map((item) => (
                  <motion.li 
                    key={item.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={item.path}
                      target="_blank"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="space-y-4">
            <h5 className="text-lg font-semibold text-white uppercase tracking-wider">
              Newsletter
            </h5>
            <p className="text-gray-400">
              Subscribe to our newsletter for legal updates and insights.
            </p>
            <form className="mt-4 space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            {copyright}
          </p>
        </div>
      </motion.div>
    </motion.footer>
  );
};

Footer.defaultProps = {
  title: "TaxLogicx Law Firm",
  description:
    "Providing expert tax advice and strategic planning to help individuals and businesses navigate complex tax regulations and optimize their financial outcomes.",
  menus: [
    {
      name: "Services",
      items: [
        { name: "Tax Consultation", path: "#services" },
        { name: "Legal Representation", path: "#services" },
        { name: "Compliance Services", path: "#services" },
        { name: "Audit Support", path: "#services" },
      ],
    },
    {
      name: "Quick Links",
      items: [
        { name: "Home", path: "#home" },
        { name: "About", path: "#about" },
        { name: "Team", path: "#team" },
        { name: "Contact", path: "#contact" },
      ],
    },
    {
      name: "Legal",
      items: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Disclaimer", path: "#" },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} TaxLogicx Law Firm. All rights reserved.
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

export default Footer;