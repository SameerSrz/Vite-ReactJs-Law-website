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
      <motion.div
       variants={reveal}
       initial="hiddenVariant"
       animate="revealedVariant"
       transition={{ ease: "easeIn", type:"tween", staggerChildren: 0.1, duration: 0.5, delayChildren: animationStart + 0.5}}
       className="flex items-center space-x-2">
        <motion.img variants={reveal} src="/assets/balance.png" className="h-6 w-auto" alt="Hafiz Legal Solutions Logo" />
        <motion.span variants={reveal} className="text-lg font-semibold">Hafiz Legal Solutions</motion.span>
      </motion.div>
      <motion.div
       variants={reveal}
       initial="hiddenVariant"
       animate="revealedVariant"
       transition={{ ease: "easeIn", type:"tween", staggerChildren: 0.1, duration: 0.5, delayChildren: animationStart + 0.5}}
       className="flex gap-20px items-center <md:hidden"
       >
        <motion.a href='#home' variants={reveal} className='cursor-pointer font-semibold'>Home</motion.a>
        <motion.a href='#services' variants={reveal} className='cursor-pointer font-semibold'>Services</motion.a>
        <motion.a href='#about' variants={reveal} className='cursor-pointer font-semibold'>About Us</motion.a>
        <motion.a href='#contact' variants={reveal} className='cursor-pointer font-semibold'>Contact Us</motion.a>
      </motion.div>
      <motion.div variants={reveal} className='flex gap-5px items-center cursor-pointer'>
        {/* <span className='mb-3px'>SignIn</span> */}
      </motion.div>
    </motion.div>
  )
}

export default Navbar
