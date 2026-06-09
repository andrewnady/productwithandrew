"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Star,
  Clock,
  Award,
  DollarSign,
} from "lucide-react";
import Image from "next/image";

const ease = [0.22, 1, 0.36, 1];

const includes = [
  "Full digital book — instant download",
  "5 ready-to-deploy proposal templates",
  "Free Upwork Profile Optimizer tool",
  "Real screenshots from a six-figure account",
  "Lifetime access — all future updates included",
];

const stats = [
  { icon: DollarSign, value: "$100K+", label: "Earned" },
  { icon: Clock, value: "4,171", label: "Hours" },
  { icon: Award, value: "Top Rated+", label: "Status" },
];

function BookCover() {
  return (
    <div className="relative w-full max-w-[280px] mx-auto">
      {/* Book shadow */}
      <div className="absolute -bottom-3 left-4 right-4 h-8 bg-black/20 blur-xl rounded-full" />

      {/* Book spine */}
      <div className="absolute left-0 top-0 bottom-0 w-5 rounded-l-sm bg-gradient-to-r from-[#8a6a20] to-[#c9a96e] z-10" />

      {/* Book body */}
      <div className="relative ml-4 rounded-r-lg overflow-hidden shadow-2xl"
        style={{ aspectRatio: "2/3" }}
      >
        {/* Try real cover first, fall back to designed placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f]">
          {/* Decorative grid */}
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "linear-gradient(rgba(201,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.3) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
          />
          {/* Gold radial glow */}
          <div className="absolute top-0 left-0 right-0 h-48 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(201,169,110,0.25),transparent)]" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold/70 mb-3">The Freelancer&apos;s Playbook</p>
              <h2 className="font-serif text-white text-xl md:text-2xl leading-tight">
                Zero to<br />
                <span className="text-gold text-2xl md:text-3xl font-bold">Six Figures</span><br />
                on Upwork
              </h2>
            </div>

            {/* Stars */}
            <div className="flex flex-col gap-3">
              <div className="h-px w-12 bg-gold/40" />
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-[10px] text-white/50 uppercase tracking-[0.15em]">Andrew Nady</p>
              <p className="text-[9px] text-white/30 uppercase tracking-[0.1em]">Top Rated Plus · $100K+ Earned</p>
            </div>
          </div>
        </div>

        {/* If real cover exists it overlays everything */}
        <Image
          src="/book-cover.png"
          alt="Zero to Six Figures on Upwork — book cover"
          fill
          sizes="280px"
          className="object-cover"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <section className="relative isolate overflow-hidden pt-36 md:pt-44 pb-24 md:pb-32 min-h-screen">
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[60vh] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(201,169,110,0.12),transparent_65%)]" />

      <div className="container-x relative">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="text-center mb-12"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-gold mb-3">Secure Checkout</p>
            <h1 className="h-display text-3xl md:text-4xl">Complete your order</h1>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:gap-12 items-start">

            {/* ── LEFT: Book + what's inside ── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="flex flex-col md:flex-row gap-8 md:gap-10 items-start"
            >
              {/* Book cover */}
              <div className="w-full md:w-auto md:shrink-0 md:w-[200px] lg:w-[220px]">
                <BookCover />
              </div>

              {/* Details */}
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.22em] text-gold mb-2">Digital Book</p>
                <h2 className="h-display text-2xl md:text-3xl leading-tight">
                  Zero to Six Figures<br />
                  <span className="gold-text">on Upwork</span>
                </h2>
                <p className="mt-3 text-sm text-ink/60 leading-relaxed max-w-sm">
                  The exact system Andrew Nady used to go from zero reviews to $100K+ Top Rated Plus. Profile teardown, proposal templates, and the full 4-lever framework.
                </p>

                {/* Verified stats */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {stats.map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.label} className="flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs">
                        <Icon size={12} className="text-gold" />
                        <span className="font-medium">{s.value}</span>
                        <span className="text-ink/40">{s.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Includes */}
                <div className="mt-6 space-y-2.5">
                  {includes.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                      <CheckCircle2 size={15} className="text-gold shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>

                {/* 14-day guarantee badge */}
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-stone-50 border border-stone-200 px-4 py-2 text-xs text-ink/60">
                  <ShieldCheck size={14} className="text-gold" />
                  14-day money-back guarantee ·{" "}
                  <a href="/refund-policy" className="underline hover:text-gold transition-colors">Refund Policy</a>
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT: Payment card ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
              className="sticky top-28"
            >
              <div className="rounded-3xl border border-stone-200 bg-white shadow-soft overflow-hidden">
                {/* Price header */}
                <div className="bg-ink text-white px-8 py-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-1">Order total</p>
                    <p className="h-display text-4xl">$29</p>
                  </div>
                  <span className="text-xs bg-gold/20 text-gold border border-gold/30 rounded-full px-3 py-1">
                    One-time
                  </span>
                </div>

                <div className="p-8">
                  {/* Order line item */}
                  <div className="flex items-center justify-between pb-5 border-b border-stone-100 text-sm">
                    <span className="text-ink/70">Zero to Six Figures on Upwork</span>
                    <span className="font-medium">$29</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 pb-6 text-sm font-medium">
                    <span>Total</span>
                    <span>$29</span>
                  </div>

                  {/* Payment gateway placeholder */}
                  <div className="rounded-2xl border-2 border-dashed border-stone-200 bg-stone-50 p-6 text-center mb-5">
                    <Lock size={20} className="text-ink/20 mx-auto mb-2" />
                    <p className="text-sm font-medium text-ink/40">Payment gateway coming soon</p>
                    <p className="mt-1 text-xs text-ink/30">Credit card / Apple Pay</p>
                  </div>

                  {/* Pay Now button */}
                  <button
                    disabled
                    className="w-full group flex items-center justify-center gap-2 rounded-full bg-gold text-white py-4 text-sm font-medium shadow-gold opacity-60 cursor-not-allowed"
                  >
                    <Lock size={15} />
                    Pay Now — $29
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="mt-4 text-center text-xs text-ink/30 flex items-center justify-center gap-1.5">
                    <ShieldCheck size={12} />
                    256-bit SSL · Instant digital delivery
                  </p>

                  <p className="mt-3 text-center text-xs text-ink/25 leading-relaxed">
                    By purchasing you agree to our{" "}
                    <a href="/terms" className="underline hover:text-gold transition-colors">Terms</a>
                    {" & "}
                    <a href="/privacy-policy" className="underline hover:text-gold transition-colors">Privacy Policy</a>.
                    {" "}Not satisfied?{" "}
                    <a href="/refund-policy" className="underline hover:text-gold transition-colors">14-day refund</a>.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
