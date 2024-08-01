import React from 'react'
import { motion } from 'framer-motion'
import { animationStart, reveal } from '../utils/Animation'

const BannerSection = () => {
  return (
    <motion.section
     id='about'
     layout
     initial={{ height: 0}}
     animate={{ height: "unset"}}
     transition={{ delay: animationStart, duration: 1}}
     className="w-full py-8 md:py-18 lg:py-24 xl:py-20 text-black">
    <motion.div
     variants={reveal}
     initial="hiddenVariant"
     animate="revealedVariant"
     transition={{ delay: animationStart + 0.5, duration: 0.5}}
     className="container mx-auto px-4 md:px-6">
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
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-800 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 disabled:pointer-events-none disabled:opacity-50"
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
    </motion.div>
</motion.section>

  )
}

export default BannerSection
