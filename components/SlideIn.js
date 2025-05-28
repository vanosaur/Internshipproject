'use client';
import { motion } from 'framer-motion';

export default function SlideIn({ children, direction = 'left', delay = 0, duration = 0.9, className = '' }) {
  const offset = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: -100 },
    down: { x: 0, y: 100 },
  }[direction] || { x: 0, y: 0 };

  return (
    <motion.div
      initial={{ ...offset, opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
