"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/assets/LOGO.png"; // ensure correct path + case

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center">
          <Image
            src={Logo}
            alt="Rehaume Logo"
            width={70}
            height={20}
            className={`transition-all duration-300 ${
              scrolled ? "opacity-90" : "brightness-200"
            }`}
            priority
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm uppercase tracking-widest transition-colors ${
                scrolled
                  ? "text-gray-800 hover:text-black"
                  : "text-gray-100 hover:text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X
              className={`w-6 h-6 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            />
          ) : (
            <Menu
              className={`w-6 h-6 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/90 backdrop-blur-md shadow-lg px-6 py-4 space-y-4"
          >
            {["About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-800 text-base uppercase tracking-wide"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
