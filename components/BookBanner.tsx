"use client";

import { ArrowRight, BookOpen, Star, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";

const highlights = [
  "Profile teardown that converts views into invites",
  "5 proposal templates that actually get replies",
  "The 4-lever niche strategy for premium rates",
];

function BookCover() {
  return (
    <div className="relative w-full max-w-[260px] mx-auto lg:mx-0">
      {/* Floor shadow */}
      <div className="absolute -bottom-4 left-6 right-6 h-8 bg-black/40 blur-2xl rounded-full" />

      {/* Spine */}
      <div className="absolute left-0 top-0 bottom-0 w-5 rounded-l-sm bg-gradient-to-r from-[#8a6a20] to-[#c9a96e] z-10" />

      {/* Body */}
      <div
        className="relative ml-4 rounded-r-xl overflow-hidden shadow-2xl ring-1 ring-white/10"
        style={{ aspectRatio: "2/3" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]">
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.3) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
          {/* Glow */}
          <div className="absolute top-0 left-0 right-0 h-48 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(201,169,110,0.28),transparent)]" />

          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <div>
              <p className="text-[9px] uppercase tracking-[0.25em] text-gold/70 mb-3">
                The Freelancer&apos;s Playbook
              </p>
              <h3 className="font-serif text-white text-lg leading-tight">
                Zero to
                <br />
                <span className="text-gold text-2xl font-bold">Six Figures</span>
                <br />
                on Upwork
              </h3>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="h-px w-10 bg-gold/40" />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={9} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-[9px] text-white/50 uppercase tracking-[0.15em]">
                Andrew Nady
              </p>
            </div>
          </div>
        </div>

        {/* Real cover overlay if present */}
        <Image
          src="/book-cover.png"
          alt="Zero to Six Figures on Upwork — book cover"
          fill
          sizes="260px"
          className="object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
    </div>
  );
}

export default function BookBanner() {
  return (
    <section className="py-16 md:py-24 bg-stone-50 border-y border-stone-100">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-ink text-white">
            {/* Ambient gold glow */}
            <div className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
            <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gold-gradient opacity-50" />

            <div className="relative grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-14 items-center p-8 md:p-12 lg:p-16">
              {/* Cover */}
              <div className="order-1">
                <BookCover />
              </div>

              {/* Copy */}
              <div className="order-2 max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs text-gold mb-5">
                  <BookOpen size={12} />
                  New — Digital Book
                </div>
                <h2 className="h-display text-3xl md:text-4xl lg:text-[44px] leading-[1.05]">
                  Zero to Six Figures{" "}
                  <span className="gold-text">on Upwork</span>
                </h2>
                <p className="mt-4 text-white/60 text-base md:text-lg leading-relaxed">
                  The exact system I used to go from 0 reviews to $100K+ Top
                  Rated Plus — not theory, the actual moves.
                </p>

                <ul className="mt-6 space-y-2.5">
                  {highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2.5 text-sm text-white/75"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-gold shrink-0 mt-0.5"
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                  <span className="text-xs text-white/50 ml-1">
                    4,171 tracked hours · $100K+ earned · Top Rated Plus
                  </span>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="/upwork-book"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold text-white px-7 py-4 text-sm font-medium shadow-gold hover:bg-gold-light transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
