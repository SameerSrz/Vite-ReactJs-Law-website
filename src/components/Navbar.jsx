import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { animationStart, reveal } from '../utils/Animation'
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
        <motion.a href='#team' variants={reveal} className='cursor-pointer font-semibold'>Our Team</motion.a>
        <motion.a href='#contact' variants={reveal} className='cursor-pointer font-semibold'>Contact Us</motion.a>
      </motion.div>
      <motion.div variants={reveal} className='flex gap-5px items-center cursor-pointer'>
        {/* <span className='mb-3px'>SignIn</span> */}
      </motion.div>
      <motion.div className='md:hidden flex items-center'>
        <IoMenu className='text-2xl cursor-pointer' onClick={toggleMenu} />
      </motion.div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-white shadow-lg z-40 md:hidden"
        >
          <div className="flex justify-end p-4">
            <IoClose className='text-2xl cursor-pointer' onClick={closeMenu} />
          </div>
          <ul className="flex flex-col items-center space-y-4 mt-8">
            <li>
              <a href="#home" className="text-lg font-semibold" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#services" className="text-lg font-semibold" onClick={closeMenu}>Services</a>
            </li>
            <li>
              <a href="#about" className="text-lg font-semibold" onClick={closeMenu}>About Us</a>
            </li>
            <li>
              <a href="#team" className="text-lg font-semibold" onClick={closeMenu}>Our Team</a>
            </li>
            <li>
              <a href="#contact" className="text-lg font-semibold" onClick={closeMenu}>Contact Us</a>
            </li>
            {/* <li>
              <a href="/get-started" className="text-lg font-semibold text-blue-500" onClick={closeMenu}>Get Started</a>
            </li> */}
          </ul>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Navbar
