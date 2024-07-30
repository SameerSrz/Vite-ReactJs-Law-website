import React from 'react'

const Services = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
  <div className="container mx-auto px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm text-gray-700">Our Services</div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Comprehensive Legal Solutions
        </h2>
        <p className="max-w-4xl text-gray-600 md:text-xl lg:text-base">
          Hafiz Legal Solutions offers a wide range of legal services to individuals and businesses, including litigation,
          corporate law, real estate, and more. Our team of experts is dedicated to providing tailored solutions to
          meet your unique needs.
        </p>
      </div>
    </div>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-3 lg:gap-12">
      <div className="grid gap-1">
        <h3 className="text-xl font-bold">Litigation</h3>
        <p className="text-gray-600">
          Our experienced litigators handle a wide range of civil and criminal cases, including personal injury,
          business disputes, and more.
        </p>
      </div>
      <div className="grid gap-1">
        <h3 className="text-xl font-bold">Corporate Law</h3>
        <p className="text-gray-600">
          We provide comprehensive legal services for businesses, including entity formation, contract drafting, and
          mergers and acquisitions.
        </p>
      </div>
      <div className="grid gap-1">
        <h3 className="text-xl font-bold">Real Estate</h3>
        <p className="text-gray-600">
          Our real estate attorneys assist clients with residential and commercial transactions, zoning and land use
          issues, and property disputes.
        </p>
      </div>
      <div className="grid gap-1">
        <h3 className="text-xl font-bold">Estate Planning</h3>
        <p className="text-gray-600">
          We help clients create comprehensive estate plans, including wills, trusts, and power of attorney documents.
        </p>
      </div>
      <div className="grid gap-1">
        <h3 className="text-xl font-bold">Family Law</h3>
        <p className="text-gray-600">
          Our family law attorneys handle a variety of matters, such as divorce, child custody, and adoption.
        </p>
      </div>
      <div className="grid gap-1">
        <h3 className="text-xl font-bold">Employment Law</h3>
        <p className="text-gray-600">
          We advise clients on employment-related issues, including discrimination, harassment, and wrongful termination.
        </p>
      </div>
    </div>
  </div>
</section>

  )
}

export default Services
