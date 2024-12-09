import React from 'react';

const Services = () => {
  return (
    <section
      id="services"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm text-gray-700">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Comprehensive Tax Solutions
            </h2>
            <p className="max-w-4xl text-gray-600 md:text-xl lg:text-base">
              Legalinks Law Firm offers a wide range of tax-related services to
              individuals and businesses, including tax filing, compliance, and
              advisory. Our team is dedicated to providing efficient and tailored
              solutions to meet your financial needs.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Income Tax Registration</h3>
            <p className="text-gray-600">
              Get expert guidance to register for income tax quickly and efficiently.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Income Tax Return Filing</h3>
            <p className="text-gray-600">
              Accurate and hassle-free filing of income tax returns for compliance.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Trademark Registration</h3>
            <p className="text-gray-600">
              Protect your brand identity by registering your trademark with ease.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Company Registration</h3>
            <p className="text-gray-600">
              Streamline the process of setting up your business with our expert help.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">PSEB Registration</h3>
            <p className="text-gray-600">
              Assistance with Pakistan Software Export Board registration for IT companies.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Sale’s Tax</h3>
            <p className="text-gray-600">
              Expert help in managing and filing sales tax to ensure compliance.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">PRA Return</h3>
            <p className="text-gray-600">
              Accurate filing of Punjab Revenue Authority returns for businesses.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">PRA Registration</h3>
            <p className="text-gray-600">
              Ensure seamless registration with the Punjab Revenue Authority.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Firm Registration</h3>
            <p className="text-gray-600">
              Simplify the process of registering your firm with our professional services.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Call Center Registration</h3>
            <p className="text-gray-600">
              Specialized services to register your call center effortlessly.
            </p>
          </div>
          <div className="grid gap-1">
            <h3 className="text-xl font-bold">Software House Registration</h3>
            <p className="text-gray-600">
              Facilitate your software house registration with ease and expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;