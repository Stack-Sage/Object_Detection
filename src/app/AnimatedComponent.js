"use client";

import { motion } from "framer-motion";

const AnimatedComponent = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.96 }} 
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 1.1,
        ease: [0.22, 1, 0.36, 0.8], 
        delay: 0.1, 
      }}
      viewport={{ once: true, amount: 0.2 }} 
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
