import React from 'react'

const BannerSection = () => {
  return (
    <section className="w-full py-8 md:py-18 lg:py-24 xl:py-40 text-black">
  <div className="container mx-auto px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
            Trusted Legal Expertise
          </h1>
          <p className="max-w-[600px] text-gray-700 md:text-xl">
            Hafiz Legal Solutions provides comprehensive legal services to individuals and businesses. Our team of
            experienced attorneys is dedicated to delivering exceptional results.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <a
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-800 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 disabled:pointer-events-none disabled:opacity-50"
          >
            Contact Us
          </a>
        </div>
      </div>
      <img
        src="assets/image-2.jpg"
        width="550"
        height="550"
        alt="Hero"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
      />
    </div>
  </div>
</section>

  )
}

export default BannerSection
