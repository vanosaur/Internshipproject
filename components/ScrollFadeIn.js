'use client';
import { motion } from 'framer-motion';

export default function ScrollFadeIn({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="mb-8"
    >
      {children}
    </motion.div>
  );
}
