"use client"; 

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
   <section className="relative w-full h-screen">
  <Image
    src="/assets/hero.jpg"
    alt="Hero background"
    fill
    className="object-cover"
    priority
  />
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-4">
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-6xl md:text-7xl font-serif text-white"
    >
      RE.HAUME
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="mt-4 text-xl md:text-2xl text-gray-200 max-w-xl"
    >
      Reimagine. Redefine. Restore.
    </motion.p>
  </div>
</section>

  );
}
