"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Award,
  Clock,
  DollarSign,
  Briefcase,
  Star,
  BookOpen,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Reveal from "./Reveal";

// TODO: Replace this URL with your Gumroad / Stripe / payment link
const BUY_LINK = "https://andrewnady.gumroad.com/l/upwork-book";

const ease = [0.22, 1, 0.36, 1];

const stats = [
  { icon: DollarSign, value: "$100K+", label: "Earned on Upwork" },
  { icon: Clock, value: "4,171", label: "Tracked Hours" },
  { icon: Award, value: "Top Rated Plus", label: "Upwork Status" },
  { icon: CheckCircle2, value: "100%", label: "Job Success Score" },
  { icon: Briefcase, value: "17", label: "Completed Projects" },
];

const chapters = [
  {
    part: "Part I — Foundation",
    items: [
      "The six-figure mindset shift most freelancers never make",
      "Picking your niche & specialization in depth",
      "Setting your rates with zero reviews (and still winning)",
    ],
  },
  {
    part: "Part II — The Profile That Sells",
    items: [
      "Your profile is a storefront, not a resume",
      "Title & tagline: winning attention in search results",
      "The overview that converts first-time visitors",
      "Portfolio, project catalogs & specialized profiles",
      "A real six-figure profile — full teardown",
      "How Upwork's algorithm actually works",
    ],
  },
  {
    part: "Part III — Proposals That Get Read",
    items: [
      "Why 70% of proposals are ignored (and how to not be one)",
      "The 4-lever framework: attention, personalization, specialization, CTA",
      "5 proposal templates — and exactly why each one works",
      "Customizing at scale without sounding generic",
      "The first 30 minutes: speed, rhythm, and the CTA",
    ],
  },
  {
    part: "Part IV — Winning & Keeping Clients",
    items: [
      "The discovery call: where deals actually close",
      "Delivering so they come back",
      "Repeat clients & referrals — the real path past $100K",
      "Mistakes that kill beginners",
    ],
  },
  {
    part: "Part V — The System & Scaling",
    items: [
      "Your complete tool stack",
      "Building systems vs. collecting hacks",
      "From freelancer to studio",
    ],
  },
];

const levers = [
  {
    icon: Zap,
    title: "Attention",
    body: "You have 3 seconds in search results. If you don't earn attention immediately, nothing else gets read.",
  },
  {
    icon: Users,
    title: "Personalization",
    body: "Prove in the first sentence you actually read what this client wrote. That alone puts you in the top 10%.",
  },
  {
    icon: TrendingUp,
    title: "Specialization",
    body: '"I can do anything" reads as "I am good at nothing." Niching down concentrates your opportunities.',
  },
  {
    icon: ArrowRight,
    title: "Call to Action",
    body: "Every proposal should make the next step obvious. The freelancer who makes it effortless to say yes wins.",
  },
];

const bonuses = [
  "Free Upwork Profile Optimizer tool (linked inside the book)",
  "Real screenshots from a six-figure account — no stock imagery",
  "5 ready-to-deploy proposal templates with commentary",
  "3 real stories from Andrew's journey: the deals closed, the ones walked away from, and the lessons",
];

export default function BookPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative isolate overflow-hidden pt-40 md:pt-52 pb-24 md:pb-32">
        <div className="absolute inset-0 -z-10 grid-bg opacity-60" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[70vh] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(201,169,110,0.2),transparent_65%)]" />
        <div className="absolute bottom-0 inset-x-0 h-32 -z-10 bg-fade-bottom" />

        <div className="container-x relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/70 backdrop-blur px-3 py-1 text-xs text-ink/70"
          >
            <BookOpen size={14} className="text-gold" />
            The Freelancer&apos;s Playbook · By Andrew Nady
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05, ease }}
            className="h-display mt-6 text-[38px] sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[82px] max-w-5xl leading-[1.05]"
          >
            Zero to{" "}
            <span className="gold-text">Six Figures</span>
            <br className="hidden sm:block" /> on Upwork
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-ink/70 leading-relaxed"
          >
            The exact system I used to go from no reviews to $100K+ Top Rated
            Plus — not theory, not motivation, but the actual moves. Profile
            teardown. Proposal framework. Niche strategy. Real numbers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href={BUY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gold text-white px-8 py-4 text-sm font-medium shadow-gold hover:bg-gold-dark transition-all duration-300"
            >
              Get the Book — $29
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="https://www.upwork.com/freelancers/andrewnady"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-4 text-sm font-medium hover:border-gold hover:text-gold transition-all duration-300"
            >
              <Briefcase size={16} />
              See my Upwork profile
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="mt-5 text-xs text-ink/45"
          >
            Written by a Top Rated Plus freelancer with 4,171+ tracked hours and
            $100K+ earned on Upwork.
          </motion.p>
        </div>
      </section>

      {/* ── SOCIAL PROOF STATS ── */}
      <section className="py-14 bg-stone-50 border-y border-stone-100">
        <div className="container-x">
          <p className="text-center text-xs uppercase tracking-[0.22em] text-ink/40 mb-10">
            Verified Upwork stats — the social proof behind every page of this
            book
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.label} delay={i * 0.06}>
                  <div className="card-surface p-5 md:p-6 h-full text-center">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white mx-auto">
                      <Icon size={16} />
                    </div>
                    <div className="mt-4 font-serif text-xl md:text-2xl leading-tight">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-ink/50">
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-8 text-center">
              <a
                href="https://www.upwork.com/freelancers/andrewnady"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-ink/60 hover:text-gold transition-colors"
              >
                Verify on Upwork →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.22em] text-gold mb-6">
                The uncomfortable truth
              </p>
              <h2 className="h-display text-3xl md:text-4xl lg:text-5xl leading-tight">
                Most freelancers send 100 proposals and hear nothing back.
              </h2>
              <p className="mt-6 text-lg text-ink/70 leading-relaxed">
                They blame the algorithm, the competition, the rates. The truth?
                They never built a system. They collect hacks — &ldquo;respond
                to invites quickly,&rdquo; &ldquo;add a video&rdquo; — and
                treat Upwork like a lottery. Then a month passes with no
                replies, and they decide the platform is saturated.
              </p>
              <p className="mt-4 text-lg text-ink/70 leading-relaxed">
                I started with zero reviews, no clients, no proof anyone would
                pay me — based in Cairo, competing against freelancers charging
                a fraction of what I needed to earn. On paper, I had every
                reason to quit.
              </p>
              <p className="mt-4 text-lg font-medium text-ink">
                Instead I built a system. This book is that system.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── THE 4 LEVERS ── */}
      <section className="py-24 md:py-32 bg-ink text-white relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gold-gradient opacity-60" />
        <div className="absolute inset-0 -z-0 grid-bg opacity-[0.06]" />
        <div className="container-x relative">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-gold mb-4">
              The framework
            </p>
            <h2 className="h-display text-3xl md:text-4xl lg:text-5xl max-w-2xl leading-tight">
              Everything that works on Upwork comes back to 4 levers.
            </h2>
            <p className="mt-5 max-w-2xl text-white/60 text-lg leading-relaxed">
              When a profile works, when a proposal gets a reply, when a client
              says yes — it&apos;s almost always because of one or more of
              these.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {levers.map((l, i) => {
              const Icon = l.icon;
              return (
                <Reveal key={l.title} delay={i * 0.08}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-7 h-full backdrop-blur-sm hover:border-gold/40 transition-colors duration-300">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold">
                      <Icon size={18} />
                    </div>
                    <h3 className="mt-5 font-serif text-xl">{l.title}</h3>
                    <p className="mt-3 text-sm text-white/60 leading-relaxed">
                      {l.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INSIDE ── */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-gold mb-4">
              Table of contents
            </p>
            <h2 className="h-display text-3xl md:text-4xl lg:text-5xl max-w-2xl leading-tight">
              22 chapters. No filler. Just the system.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {chapters.map((c, i) => (
              <Reveal key={c.part} delay={i * 0.07}>
                <div className="card-surface p-7 h-full">
                  <p className="text-xs uppercase tracking-[0.18em] text-gold font-medium mb-5">
                    {c.part}
                  </p>
                  <ul className="space-y-3">
                    {c.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-ink/80 leading-snug"
                      >
                        <Star
                          size={12}
                          className="text-gold mt-1 shrink-0 fill-gold"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BONUSES ── */}
      <section className="py-20 bg-stone-50 border-y border-stone-100">
        <div className="container-x">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-gold mb-4">
              Also included
            </p>
            <h2 className="h-display text-2xl md:text-3xl lg:text-4xl mb-10">
              Free bonuses inside
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {bonuses.map((b, i) => (
              <Reveal key={b} delay={i * 0.06}>
                <div className="flex items-start gap-4 card-surface p-6">
                  <CheckCircle2
                    size={20}
                    className="text-gold shrink-0 mt-0.5"
                  />
                  <p className="text-sm text-ink/80 leading-relaxed">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT THE AUTHOR ── */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.22em] text-gold mb-6">
                About the author
              </p>
              <h2 className="h-display text-3xl md:text-4xl leading-tight">
                Andrew Nady — Top Rated Plus, Cairo → Global
              </h2>
              <p className="mt-6 text-lg text-ink/70 leading-relaxed">
                Andrew started freelancing on Upwork with zero reviews, no
                existing clients, and no network — competing from Cairo against
                both low-cost freelancers and established Western agencies.
                Through deliberate profile engineering, a disciplined proposal
                system, and relentless niche focus, he earned Top Rated Plus
                status: the top 3% of talent on the platform.
              </p>
              <p className="mt-4 text-lg text-ink/70 leading-relaxed">
                Today he runs Product with Andrew LLC — a product strategy and
                launch studio — and has shipped multiple owned products in
                addition to client work. This book is the unfiltered playbook
                from that journey, written for the freelancer who is tired of
                hacks and wants a system.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                <a
                  href="https://www.upwork.com/freelancers/andrewnady"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-medium hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <Briefcase size={15} />
                  Upwork Profile — Verified
                </a>
                <a
                  href="/"
                  className="group inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-medium hover:border-gold hover:text-gold transition-all duration-300"
                >
                  Product with Andrew Studio →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── BUY CTA ── */}
      <section
        id="get-book"
        className="py-24 md:py-32 bg-ink text-white relative overflow-hidden"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gold-gradient opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gold-gradient opacity-30" />
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(201,169,110,0.12),transparent_70%)]" />
        <div className="container-x relative text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.22em] text-gold mb-6">
              Start today
            </p>
            <h2 className="h-display text-4xl md:text-5xl lg:text-6xl max-w-3xl mx-auto leading-tight">
              Stop collecting hacks.
              <br />
              <span className="gold-text">Build the system.</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-white/60 text-lg leading-relaxed">
              Everything in this book is based on a real account, real numbers,
              and a system that still runs. No theory. No fluff. Just the moves.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={BUY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gold text-white px-10 py-4 text-base font-medium shadow-gold hover:bg-gold-light transition-all duration-300"
              >
                Get the Book — $29
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            <p className="mt-6 text-xs text-white/30">
              Digital download. Instant access.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
