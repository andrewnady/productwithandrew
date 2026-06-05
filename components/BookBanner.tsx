"use client";

import { ArrowRight, BookOpen, Star } from "lucide-react";
import Reveal from "./Reveal";

export default function BookBanner() {
  return (
    <section className="py-16 md:py-20 bg-stone-50 border-y border-stone-100">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink text-white p-8 md:p-12 lg:p-14">
            {/* Gold glow */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-px bg-gold-gradient opacity-40" />

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs text-gold mb-5">
                  <BookOpen size={12} />
                  New — Digital Book
                </div>
                <h2 className="h-display text-3xl md:text-4xl lg:text-[42px] leading-tight">
                  Zero to Six Figures{" "}
                  <span className="gold-text">on Upwork</span>
                </h2>
                <p className="mt-4 text-white/60 text-base md:text-lg leading-relaxed max-w-lg">
                  The exact system I used to go from 0 reviews to $100K+ Top
                  Rated Plus. Profile teardown, proposal templates, niche
                  strategy — the full playbook.
                </p>
                <div className="mt-5 flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-gold fill-gold"
                    />
                  ))}
                  <span className="text-xs text-white/50 ml-1">
                    4,171 tracked hours · $100K+ earned · Top Rated Plus
                  </span>
                </div>
              </div>

              <div className="shrink-0">
                <a
                  href="/upwork-book"
                  className="group inline-flex items-center gap-2 rounded-full bg-gold text-white px-8 py-4 text-sm font-medium shadow-gold hover:bg-gold-light transition-all duration-300"
                >
                  Learn more
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
