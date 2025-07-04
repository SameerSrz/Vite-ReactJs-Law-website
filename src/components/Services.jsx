import React from 'react';
import { FaFileAlt, FaTrademark, FaBuilding, FaChartLine } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaFileAlt className="text-blue-600 text-3xl" />,
      title: "Income Tax Registration",
      description: "Expert guidance to register for income tax quickly and efficiently."
    },
    {
      icon: <FaFileAlt className="text-blue-600 text-3xl" />,
      title: "Income Tax Return Filing",
      description: "Accurate and hassle-free filing of income tax returns for compliance."
    },
    {
      icon: <FaTrademark className="text-blue-600 text-3xl" />,
      title: "Trademark Registration",
      description: "Protect your brand identity by registering your trademark with ease."
    },
    {
      icon: <FaBuilding className="text-blue-600 text-3xl" />,
      title: "Company Registration",
      description: "Streamline the process of setting up your business with our expert help."
    },
    {
      icon: <FaChartLine className="text-blue-600 text-3xl" />,
      title: "PSEB Registration",
      description: "Assistance with Pakistan Software Export Board registration for IT companies."
    },
    {
      icon: <FaChartLine className="text-blue-600 text-3xl" />,
      title: "Sales Tax",
      description: "Expert help in managing and filing sales tax to ensure compliance."
    }
  ];

  return (
    <section id="services" className="w-full py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Tax Solutions
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            TaxLogicx Law Firm offers a wide range of tax-related services to individuals and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;