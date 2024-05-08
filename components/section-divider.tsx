"use client";

import { motion } from "framer-motion";
import React from "react";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-gray-300 my-12 h-16 w-1 rounded-full hidden sm:block"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    ></motion.div>
  );
}
