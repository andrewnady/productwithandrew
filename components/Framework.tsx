"use client";

import {
  Lightbulb,
  Search,
  Map,
  PenTool,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    icon: Lightbulb,
    title: "Idea Validation",
    body: "Pressure-test the problem, the user and the willingness to pay before a single line of code is written.",
  },
  {
    icon: Search,
    title: "Market & Competitor Analysis",
    body: "Map the landscape, find the wedge, and craft a defensible position grounded in evidence.",
  },
  {
    icon: Map,
    title: "Product Strategy & Roadmap",
    body: "Translate vision into a sequenced roadmap — outcomes, bets, milestones and KPIs.",
  },
  {
    icon: PenTool,
    title: "UX & Wireframing",
    body: "Architect flows that feel obvious — fast iteration on low-fidelity wireframes with real users.",
  },
  {
    icon: Palette,
    title: "UI Design",
    body: "A premium visual system with real product polish — type, color, motion and consistency.",
  },
  {
    icon: Code2,
    title: "Development",
    body: "Lead engineering teams to ship clean, scalable products on modern stacks with velocity.",
  },
  {
    icon: ShieldCheck,
    title: "Testing & QA",
    body: "Hardened releases with structured QA, automated tests and observability built-in.",
  },
  {
    icon: Rocket,
    title: "Launch & Growth",
    body: "Go-to-market, onboarding, retention loops and analytics — so launch isn't the finish line.",
  },
];

export default function Framework() {
  return (
    <section id="framework" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          eyebrow="The Framework"
          title="My 0 → 1 product framework."
          description="Eight disciplined steps that turn raw ideas into shipped products — repeatable across AI, SaaS, marketplaces and platforms."
        />

        <div className="relative mt-16">
          {/* central vertical line */}
          <div
            aria-hidden
            className="absolute left-6 md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-stone-200 to-transparent md:-translate-x-1/2"
          />

          <ol className="space-y-12 md:space-y-20">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const right = i % 2 === 1;
              return (
                <li
                  key={s.title}
                  className="relative md:grid md:grid-cols-2 md:gap-16"
                >
                  {/* dot */}
                  <span
                    aria-hidden
                    className="absolute left-6 md:left-1/2 top-2 -translate-x-1/2 z-10 inline-flex h-3 w-3 items-center justify-center"
                  >
                    <span className="h-3 w-3 rounded-full bg-gold ring-4 ring-white" />
                  </span>

                  {/* content side */}
                  <div
                    className={`pl-16 md:pl-0 ${
                      right ? "md:col-start-2 md:pl-16" : "md:pr-16 md:text-right"
                    }`}
                  >
                    <Reveal delay={0.05}>
                      <div
                        className={`inline-flex items-center gap-2 rounded-full bg-stone-50 border border-stone-100 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-ink/55`}
                      >
                        Step {String(i + 1).padStart(2, "0")}
                      </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                      <h3 className="h-display mt-4 text-2xl md:text-3xl">
                        {s.title}
                      </h3>
                    </Reveal>
                    <Reveal delay={0.15}>
                      <p className="mt-3 text-ink/65 leading-relaxed max-w-md md:max-w-none md:ml-auto">
                        {s.body}
                      </p>
                    </Reveal>
                  </div>

                  {/* icon side */}
                  <div
                    className={`hidden md:flex items-start ${
                      right ? "md:col-start-1 md:row-start-1 justify-end" : ""
                    }`}
                  >
                    <Reveal delay={0.1}>
                      <div className="relative">
                        <div className="absolute -inset-6 rounded-3xl bg-gold/10 blur-2xl opacity-70" />
                        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white border border-stone-100 shadow-soft">
                          <Icon size={26} className="text-gold" />
                        </div>
                      </div>
                    </Reveal>
                  </div>

                  {/* mobile icon */}
                  <div className="md:hidden absolute left-0 top-0 pl-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-stone-100 shadow-soft">
                      <Icon size={16} className="text-gold" />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
