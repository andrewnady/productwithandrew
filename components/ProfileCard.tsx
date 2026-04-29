"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  BadgeCheck,
  MapPin,
  Clock,
  Crown,
  Star,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal";

function useCairoTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const t = new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Cairo",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(new Date());
      setTime(t.toLowerCase());
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export default function ProfileCard() {
  const localTime = useCairoTime();

  return (
    <section
      aria-label="Profile preview"
      className="relative pb-20 md:pb-28"
    >
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-stone-200/80 bg-white shadow-lift">
            {/* Top gold accent */}
            <div className="absolute top-0 inset-x-0 h-px bg-gold-gradient opacity-80" />

            {/* ── Identity row ───────────────────────────────── */}
            <div className="relative px-7 md:px-10 lg:px-12 pt-9 md:pt-11 pb-7 md:pb-9">
              <div className="flex flex-col md:flex-row md:items-center gap-7 md:gap-10">
                {/* Profile image — wide landscape, fully visible */}
                <div className="relative shrink-0 w-full md:w-[280px] lg:w-[320px]">
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden">
                    <Image
                      src="/profile.jpg"
                      alt="Andrew Nady — Founder, Product with Andrew"
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Identity content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="h-display text-3xl md:text-[40px] leading-none">
                      Andrew Nady
                    </h2>
                    <BadgeCheck
                      className="text-blue-500 shrink-0"
                      size={24}
                      aria-label="Verified"
                    />
                  </div>

                  {/* Meta line */}
                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink/65">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} className="text-ink/40" />
                      Cairo, Egypt
                    </span>
                    {localTime && (
                      <>
                        <span className="hidden sm:inline text-ink/20">•</span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock size={14} className="text-ink/40" />
                          {localTime} local
                        </span>
                      </>
                    )}
                    <span className="hidden sm:inline text-ink/20">•</span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 font-medium">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </span>
                      Available now
                    </span>
                  </div>

                  {/* Trust badges */}
                  <div className="mt-5 flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-50/60 px-3 py-1.5 text-xs font-medium text-blue-800">
                      <Crown size={13} className="text-blue-600" />
                      100% Job Success
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-xs font-medium text-gold-dark">
                      <Star size={13} className="fill-current" />
                      Top Rated Plus
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-ink/70">
                      Verified · Upwork
                    </span>
                  </div>
                </div>

                {/* CTA — desktop only */}
                <div className="hidden md:block shrink-0">
                  <a
                    href="https://www.upwork.com/freelancers/andrewnady"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-ink text-white px-5 py-3 text-sm font-medium shadow-soft hover:bg-gold transition-all"
                  >
                    View Upwork profile
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Hairline */}
            <div className="relative h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />

            {/* ── Stats row ──────────────────────────────────── */}
            <div className="relative px-7 md:px-10 lg:px-12 py-7 md:py-8">
              <dl className="grid grid-cols-3 divide-x divide-stone-200/70">
                <div className="pr-4 md:pr-8">
                  <dt className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-ink/45 font-medium">
                    Total earnings
                  </dt>
                  <dd className="mt-2 h-display text-[26px] md:text-[34px] lg:text-[40px] leading-none">
                    $100K<span className="text-gold">+</span>
                  </dd>
                </div>
                <div className="px-4 md:px-8">
                  <dt className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-ink/45 font-medium">
                    Total jobs
                  </dt>
                  <dd className="mt-2 h-display text-[26px] md:text-[34px] lg:text-[40px] leading-none">
                    17
                  </dd>
                </div>
                <div className="pl-4 md:pl-8">
                  <dt className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-ink/45 font-medium">
                    Total hours
                  </dt>
                  <dd className="mt-2 h-display text-[26px] md:text-[34px] lg:text-[40px] leading-none">
                    4,171
                  </dd>
                </div>
              </dl>

              {/* CTA — mobile only */}
              <div className="md:hidden mt-7">
                <a
                  href="https://www.upwork.com/freelancers/andrewnady"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink text-white px-5 py-3 text-sm font-medium hover:bg-gold transition-all"
                >
                  View Upwork profile
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
