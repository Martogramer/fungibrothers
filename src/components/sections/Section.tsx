// src/components/ui/Section.tsx
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  image?: string;
  reverse?: boolean;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, reverse, className }) => {
  return (
    <motion.section
      className={`w-full flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-20 ${
        reverse ? "md:flex-row-reverse" : ""
      } ${className || ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="md:w-1/2 mb-10 md:mb-0">{children}</div>
    </motion.section>
  );
};

export default Section;
