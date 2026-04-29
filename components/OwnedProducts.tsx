"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const owned = [
  {
    name: "Hurghada Safari",
    href: "https://hurghadasafari.travel",
    region: "Hurghada · Red Sea",
    blurb:
      "A premium desert & marine safari experience platform serving travelers in Hurghada — bookings, operations and growth.",
    logo: "/logos/hurghada-safari.png",
  },
  {
    name: "Sharm El Sheikh Safari",
    href: "https://sharmelsheikhsafari.com",
    region: "Sharm El Sheikh · Sinai",
    blurb:
      "End-to-end adventure tourism brand connecting visitors to curated experiences in Sharm El Sheikh.",
    logo: "/logos/sharm-safari.png",
  },
];

export default function OwnedProducts() {
  return (
    <section id="products" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="Our Studio Brands"
          title="Products we built and operate."
          description="Built & operated under Product with Andrew LLC — owned products that demonstrate our 0→1 capability end-to-end."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {owned.map((p, i) => {
            return (
              <Reveal key={p.name} delay={i * 0.08}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden card-surface p-8 md:p-10 h-full"
                >
                  {/* gradient halo */}
                  <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-white border border-stone-200 shadow-soft overflow-hidden flex items-center justify-center">
                        <Image
                          src={p.logo}
                          alt={`${p.name} logo`}
                          fill
                          sizes="96px"
                          className="object-contain p-3"
                        />
                      </div>
                      <span className="text-xs uppercase tracking-[0.2em] text-ink/50">
                        Owned · Operated
                      </span>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-ink/40 transition-all duration-300 group-hover:text-gold group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>

                  <h3 className="h-display mt-8 text-2xl md:text-[28px]">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-gold-dark">{p.region}</p>
                  <p className="mt-4 text-ink/70 leading-relaxed max-w-md">
                    {p.blurb}
                  </p>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm text-ink/70 border-t border-stone-100 pt-5 w-full">
                    Visit live site
                    <span className="text-gold">{p.href.replace(/^https?:\/\//, "")}</span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-xs uppercase tracking-[0.22em] text-ink/40">
            Built & Operated under Product with Andrew LLC
          </p>
        </Reveal>
      </div>
    </section>
  );
}
