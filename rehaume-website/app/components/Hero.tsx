"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Logo from "@/public/assets/LOGO.png";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/assets/hero.jpg"
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-4">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative w-48 h-48 md:w-64 md:h-64"
        >
          <Image
            src={Logo}
            alt="Rehaume Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Tagline */}
       
          <h1 className="font-religath tracking-widehero text-5xl">
        RE.HAUME
          </h1>
      </div>
    </section>
  );
}
