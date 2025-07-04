import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-[50px]">
      <Helmet>
        <title>Privacy Policy | Tax Logicx</title>
        <meta name="description" content="Read our privacy policy to understand how we collect, use, and protect your personal information." />
      </Helmet>

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-500 text-lg">Last Updated: July 7, 2025</p>
        </div>

        {/* Policy Content */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8 md:p-12">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">1. Introduction</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-semibold text-gray-900">Tax Logicx</span> is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (the "Site").
                </p>
                <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 italic">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the Site.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">2. Information We Collect</h2>
              <div className="space-y-6">
                <p className="text-gray-700">
                  We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Data</h3>
                  <p className="text-gray-700">
                    Personally identifiable information, such as your name, email address, phone number, and other information you voluntarily submit through our contact forms or when scheduling consultations.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Derivative Data</h3>
                  <p className="text-gray-700">
                    Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Cookies and Tracking Technologies</h3>
                  <p className="text-gray-700">
                    We may use cookies, web beacons, tracking pixels, and other tracking technologies to collect information about you when you interact with our Site.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">3. Use of Your Information</h2>
              <p className="text-gray-700 mb-6">We may use information collected about you to:</p>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Respond to your inquiries and provide legal services</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Improve our website and user experience</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Send you newsletters and marketing communications</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Process payments and transactions</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Comply with legal obligations</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Prevent fraudulent activities and enhance security</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">4. Disclosure of Your Information</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                    Legal Requirements
                  </h3>
                  <p className="text-gray-700">
                    If required to do so by law or in response to valid requests by public authorities.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                    Service Providers
                  </h3>
                  <p className="text-gray-700">
                    With third parties that perform services for us, such as payment processing, data analysis, email delivery, hosting services, and customer service.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                    Business Transfers
                  </h3>
                  <p className="text-gray-700">
                    In connection with any merger, sale of company assets, or acquisition.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">5. Security of Your Information</h2>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-700">
                  We use administrative, technical, and physical security measures to help protect your personal information. However, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">6. Your Rights</h2>
              <p className="text-gray-700 mb-6">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Access Rights</h3>
                  <p className="text-gray-700">The right to access and receive a copy of your personal data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Correction Rights</h3>
                  <p className="text-gray-700">The right to request correction of inaccurate personal data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Deletion Rights</h3>
                  <p className="text-gray-700">The right to request deletion of your personal data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Opt-Out Rights</h3>
                  <p className="text-gray-700">The right to opt-out of marketing communications</p>
                </div>
              </div>
              <p className="text-gray-700 mt-6">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">7. Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">8. Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <span className="text-gray-700">5-A Kapoor Thallah House, Lake Road, Old Anarkali, Lahore, Pakistan</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Hafiz.waseem@taxlogicx.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <span className="text-gray-700">+92 321 8000208</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;