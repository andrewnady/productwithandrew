"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-40 md:pt-52 pb-24 md:pb-32"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[60vh] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(201,169,110,0.18),transparent_60%)]" />
      <div className="absolute bottom-0 inset-x-0 h-32 -z-10 bg-fade-bottom" />

      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-ink/70"
        >
          <Sparkles size={14} className="text-gold" />
          Product Strategy & Launch Studio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05, ease }}
          className="h-display mt-6 text-[40px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] max-w-5xl"
        >
          I turn ideas into{" "}
          <span className="gold-text">scalable products</span>
          <br className="hidden md:block" /> — from{" "}
          <span className="relative inline-block whitespace-nowrap">
            0 to launch.
            <svg
              aria-hidden
              viewBox="0 0 200 12"
              className="absolute -bottom-2 left-0 w-full h-3 text-gold"
              fill="none"
            >
              <path
                d="M2 8 C 50 2, 150 2, 198 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-ink/70 leading-relaxed"
        >
          Product Strategy <span className="text-gold">•</span> Execution{" "}
          <span className="text-gold">•</span> AI Products{" "}
          <span className="text-gold">•</span> Marketplaces
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-full bg-ink text-white px-6 py-3.5 text-sm font-medium shadow-soft hover:shadow-lift hover:bg-gold transition-all duration-300"
          >
            View My Products
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="https://calendly.com/andrewnady/30-min-consultation-call"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-medium hover:border-gold hover:text-gold transition-all duration-300"
          >
            <Calendar size={16} />
            Book a Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
