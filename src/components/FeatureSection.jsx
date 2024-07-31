import React from 'react'
import image1 from '../../public/assets/image-1.jpg'
import { motion } from 'framer-motion'
import { animationStart, reveal } from '../utils/Animation'

const FeatureSection = () => {

    const post = {
        image: image1, // Replace with actual image path
        title: 'Expert Tax Advisory Services',
        description: 'Specialized in providing comprehensive tax planning and legal representation to ensure optimal financial outcomes. From personal tax issues to complex corporate tax strategies, we deliver tailored solutions to meet your needs.',
      };

  return (
    <motion.div
      layout
      initial={{ height: 0}}
      animate={{ height: "unset"}}
      transition={{ delay: animationStart, duration: 1}} 
      className="relative ml-3 mt-9 mr-3 mb-4 text-white bg-cover bg-no-repeat bg-center rounded-lg"
      style={{ backgroundImage: `url(${post.image})` }}
    >
      <motion.div
       variants={reveal}
       initial="hiddenVariant"
       animate="revealedVariant"
       transition={{ delay: animationStart + 0.5, duration: 0.5}}
       className="grid md:grid-cols-2">
        <div className="relative p-4 md:p-6 md:pr-0">
          <h1 className="text-3xl md:text-4xl pt-11 font-bold "
           style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)' }}
           >
            {post.title}
         </h1>
          <p className="text-lg md:text-xl mt-4"
           style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
           >
            {post.description}
         </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default FeatureSection
