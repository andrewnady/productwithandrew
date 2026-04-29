"use client";

import {
  Award,
  CheckCircle2,
  DollarSign,
  Briefcase,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const stats = [
  { icon: CheckCircle2, value: "100%", label: "Job Success" },
  { icon: Award, value: "Top Rated Plus", label: "Upwork Status" },
  { icon: DollarSign, value: "$100K+", label: "Total Earnings" },
  { icon: Briefcase, value: "17", label: "Projects" },
  { icon: Clock, value: "4,171", label: "Hours" },
];

export default function Credibility() {
  return (
    <section
      id="credibility"
      className="relative py-24 md:py-32 bg-stone-50 border-y border-stone-100"
    >
      <div className="container-x">
        <SectionHeader
          eyebrow="Credibility"
          title="A track record of shipping."
          description="Verified outcomes from years of hands-on product leadership across global teams and industries."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-4">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="card-surface p-6 h-full">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-white">
                    <Icon size={16} />
                  </div>
                  <div className="mt-5 font-serif text-2xl md:text-3xl leading-tight">
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
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="https://www.upwork.com/freelancers/andrewnady"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-gold transition-colors"
            >
              View my Upwork profile
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <p className="text-sm text-ink/55">
              Verified Top Rated Plus — top 3% of talent on Upwork.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
