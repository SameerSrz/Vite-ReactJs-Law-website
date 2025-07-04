import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-[50px]">
      <Helmet>
        <title>Terms of Service | Tax Logicx</title>
        <meta name="description" content="Review our Terms of Service governing your use of our website and services." />
      </Helmet>

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-500 text-lg">Effective Date: July 7, 2025</p>
        </div>

        {/* Terms Content */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8 md:p-12">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  By accessing or using the services provided by <span className="font-semibold text-gray-900">Tax Logicx</span> ("we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our services.
                </p>
                <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 italic">
                  These Terms constitute a legally binding agreement between you and Tax Logicx regarding your use of our website and services.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">2. Services Provided</h2>
              <div className="space-y-6">
                <p className="text-gray-700">
                  Tax Logicx provides professional tax consulting and legal services including but not limited to:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                      Tax Consultation
                    </h3>
                    <p className="text-gray-700">
                      Professional advice on tax planning, compliance, and strategy development.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                      Legal Representation
                    </h3>
                    <p className="text-gray-700">
                      Representation in tax disputes and negotiations with tax authorities.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                      Compliance Services
                    </h3>
                    <p className="text-gray-700">
                      Assistance with tax filings, documentation, and regulatory compliance.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</span>
                      Audit Support
                    </h3>
                    <p className="text-gray-700">
                      Guidance and representation during tax audits and investigations.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">3. Client Responsibilities</h2>
              <p className="text-gray-700 mb-6">As a client of Tax Logicx, you agree to:</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Provide accurate and complete information necessary for our services</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Timely respond to requests for information or documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Review all documents prepared by us before submission</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 bg-blue-100 text-blue-600 p-2 rounded-full mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Make timely payments for services rendered</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">4. Fees and Payments</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Fees</h3>
                  <p className="text-gray-700">
                    Our fees are based on the complexity of services required. We will provide a fee estimate before commencing work, though actual fees may vary depending on circumstances encountered during the engagement.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Payment Terms</h3>
                  <p className="text-gray-700">
                    Payment is due as specified in your engagement letter. Late payments may be subject to interest charges of 1.5% per month (18% annually) on the outstanding balance.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Refund Policy</h3>
                  <p className="text-gray-700">
                    Due to the professional nature of our services, fees paid are generally non-refundable. However, we will review refund requests on a case-by-case basis.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">5. Confidentiality</h2>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <p className="text-gray-700">
                  We maintain strict confidentiality regarding all client information, in accordance with our Privacy Policy and professional ethical obligations. Information will only be disclosed with your consent or as required by law.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">6. Limitation of Liability</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Tax Logicx will exercise due professional care in providing services. However, we cannot guarantee specific outcomes, particularly in matters involving third parties such as tax authorities or courts.
                </p>
                <p>
                  Our liability for any claim relating to our services shall be limited to the fees paid for those specific services in the six months preceding the claim.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">7. Termination</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">By Client</h3>
                  <p className="text-gray-700">
                    You may terminate our services at any time by providing written notice. Fees for work performed up to the termination date will be due and payable.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">By Tax Logicx</h3>
                  <p className="text-gray-700">
                    We reserve the right to terminate services for non-payment, failure to cooperate, or other good cause, with reasonable notice when possible.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">8. Governing Law</h2>
              <p className="text-gray-700">
                These Terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes shall be resolved in the courts of Lahore, Pakistan.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">9. Changes to Terms</h2>
              <p className="text-gray-700">
                We may modify these Terms at any time. The updated version will be posted on our website with a new effective date. Your continued use of our services constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">10. Contact Information</h2>
              <p className="text-gray-700 mb-6">
                For questions about these Terms of Service, please contact us at:
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

export default TermsOfService;