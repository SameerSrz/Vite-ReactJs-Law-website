import React from 'react'
import { motion } from 'framer-motion'
import { animationStart, reveal } from '../utils/Animation'

const Navbar = () => {
  return (
    <motion.div 
     initial={{ opacity: 0}}
     animate={{opacity: 1}}
     transition={{duration: 0.5, delay: animationStart}}
     className='w-full flex items-center justify-around h-80px fixed top-0 bg-white z-100'
     >
        Logo
      <motion.div
       variants={reveal}
       initial="hiddenVariant"
       animate="revealedVariant"
       transition={{ ease: "easeIn", type:"tween", staggerChildren: 0.1, duration: 0.5, delayChildren: animationStart + 0.5}}
       className="flex gap-20px items-center <md:hidden"
       >
        <motion.span variants={reveal} className='cursor-pointer'>Home</motion.span>
        <motion.span variants={reveal} className='cursor-pointer'>Solutions</motion.span>
        <motion.span variants={reveal} className='cursor-pointer'>About Us</motion.span>
        <motion.span variants={reveal} className='cursor-pointer'>Contact Us</motion.span>
      </motion.div>
      <motion.div variants={reveal} className='flex gap-5px items-center cursor-pointer'>
        {/* <span className='mb-3px'>SignIn</span> */}
      </motion.div>
    </motion.div>
  )
}

export default Navbar
