import React from 'react'
import { motion } from 'framer-motion'
import { animationStart, reveal } from '../utils/Animation'

const HeroText = () => {
  return (
    <motion.div
     layout
     initial={{ height: 0}}
     animate={{ height: "unset"}}
     transition={{ delay: animationStart, duration: 1}}
     className='flex flex-col items-center text-center '
     >
        <motion.div variants={reveal}
         initial="hiddenVariant"
         animate="revealedVariant"
         transition={{ delay: animationStart + 0.5, duration: 0.5}} 
         className="flex flex-col text-3vw <md:text-24px font-bold mb-30px pt-100px">
            <span>Delivering industry's</span>
            <span>top law services</span>
        </motion.div>
        <motion.span
         variants={reveal}
         initial="hiddenVariant"
         animate="revealedVariant"
         transition={{ delay: animationStart + 0.7, duration: 0.5}}
         className='mb-30px w-1/4 <lg:w-1/3 <md:w-1/2 text-14px leading-tight'>
        Our team of expert tax attorneys provides comprehensive services to ensure compliance with ever-changing tax laws. We offer personalized strategies for tax planning, dispute resolution, and audit defense, helping you minimize liabilities and maximize financial efficiency.
        </motion.span>
    </motion.div>
  )
}

export default HeroText
