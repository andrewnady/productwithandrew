"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

type Project = {
  name: string;
  category: string;
  description: string;
  href?: string;
  logo?: string;
  logoBg?: "light" | "dark";
};

const groups: { label: string; items: Project[] }[] = [
  {
    label: "AI / SaaS",
    items: [
      {
        name: "Octopii",
        category: "AI / SaaS",
        description:
          "AI-powered data classification and PII discovery tooling for modern compliance teams.",
        logo: "/logos/octopii.png",
      },
      {
        name: "Mio",
        category: "AI / SaaS",
        description:
          "An AI assistant that turns your conversations and content into actionable knowledge.",
        href: "https://askmio.co",
        logo: "/mio.svg",
      },
    ],
  },
  {
    label: "Data",
    items: [
      {
        name: "Pricelisto",
        category: "Data",
        description:
          "The largest crowd-sourced restaurant menu price database — product, growth, and ops.",
        href: "https://pricelisto.com",
        logo: "/logos/pricelisto.png",
      },
    ],
  },
  {
    label: "Consumer",
    items: [
      {
        name: "Balkanza",
        category: "Consumer",
        description:
          "A consumer brand with a refined digital experience — strategy, positioning and launch.",
        href: "https://balkanza.com",
        logo: "/balkanza.svg",
      },
    ],
  },
  {
    label: "Platforms",
    items: [
      {
        name: "Gymdues",
        category: "Platforms",
        description:
          "A platform helping gyms automate billing, membership and member engagement.",
        href: "http://gymdues.com",
        logo: "/logos/gymdues.png",
      },
      {
        name: "Engaz HR",
        category: "Platforms",
        description:
          "An end-to-end HR platform built for the GCC market — payroll, performance and people ops.",
        href: "https://engazhr.com",
        logo: "/logos/engaz.png",
      },
    ],
  },
  {
    label: "AI / IoT",
    items: [
      {
        name: "Smart Poultry",
        category: "AI / IoT",
        description:
          "AI + IoT for poultry farms — real-time monitoring, predictive insights and automation.",
        href: "https://smartpoultry.ai",
      },
    ],
  },
  {
    label: "Marketplace",
    items: [
      {
        name: "Tuwayq",
        category: "Marketplace",
        description:
          "A two-sided marketplace built from the ground up — supply, demand and unit economics.",
        href: "https://tuwayq.com",
        logo: "/logos/tuwayq.png",
      },
    ],
  },
];

const ALL = "All";

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const cardCls =
    "group relative block overflow-hidden card-surface p-7 h-full";

  const inner = (
    <>
      <div className="flex items-start justify-between">
        <span className="inline-flex items-center rounded-full border border-stone-200 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-ink/55">
          {p.category}
        </span>
        {p.href && (
          <ArrowUpRight
            size={18}
            className="text-ink/35 transition-all duration-300 group-hover:text-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        )}
      </div>
      {p.logo ? (
        <div
          className={`relative mt-6 h-20 w-20 rounded-2xl border overflow-hidden flex items-center justify-center ${
            p.logoBg === "dark"
              ? "bg-ink border-ink/10"
              : "bg-white border-stone-200"
          }`}
        >
          <Image
            src={p.logo}
            alt={`${p.name} logo`}
            fill
            sizes="80px"
            className="object-contain p-3"
          />
        </div>
      ) : (
        <div className="mt-6 h-20 w-20 rounded-2xl bg-stone-100 border border-stone-200 flex items-center justify-center">
          <span className="h-display text-2xl text-ink/60">
            {p.name.charAt(0)}
          </span>
        </div>
      )}
      <h3 className="h-display mt-6 text-2xl">{p.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/65">
        {p.description}
      </p>
      {p.href && (
        <p className="mt-6 text-xs text-ink/40 truncate">
          {p.href.replace(/^https?:\/\//, "")}
        </p>
      )}
      <span className="pointer-events-none absolute left-0 bottom-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
    </>
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{
        duration: 0.45,
        delay: (i % 3) * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {p.href ? (
        <a
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cardCls}
        >
          {inner}
        </a>
      ) : (
        <div className={cardCls}>{inner}</div>
      )}
    </motion.div>
  );
}

export default function Portfolio() {
  const tabs = useMemo(() => [ALL, ...groups.map((g) => g.label)], []);
  const [active, setActive] = useState<string>(ALL);

  const visible = useMemo<Project[]>(() => {
    if (active === ALL) return groups.flatMap((g) => g.items);
    const g = groups.find((x) => x.label === active);
    return g ? g.items : [];
  }, [active]);

  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-32 bg-stone-50 border-y border-stone-100"
    >
      <div className="container-x">
        <SectionHeader
          eyebrow="Portfolio"
          title="Products I built & managed."
          description="A selection of products across AI, SaaS, marketplaces, platforms and consumer — shipped and scaled with diverse teams."
        />

        {/* Tabs */}
        <Reveal>
          <div
            role="tablist"
            aria-label="Portfolio categories"
            className="mt-12 -mx-2 px-2 overflow-x-auto"
          >
            <LayoutGroup id="portfolio-tabs">
              <div className="inline-flex items-center gap-1 rounded-full bg-white border border-stone-200 p-1 shadow-soft min-w-max">
                {tabs.map((tab) => {
                  const isActive = tab === active;
                  return (
                    <button
                      key={tab}
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="portfolio-panel"
                      onClick={() => setActive(tab)}
                      className={`relative px-4 md:px-5 py-2 text-xs md:text-sm rounded-full whitespace-nowrap transition-colors duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-ink/65 hover:text-ink"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="tab-pill"
                          className="absolute inset-0 rounded-full bg-ink"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 32,
                          }}
                        />
                      )}
                      <span className="relative z-10 uppercase tracking-[0.16em] font-medium">
                        {tab}
                      </span>
                    </button>
                  );
                })}
              </div>
            </LayoutGroup>
          </div>
        </Reveal>

        {/* Panel */}
        <div
          id="portfolio-panel"
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          className="mt-10"
        >
          <LayoutGroup id="portfolio-grid">
            <motion.div
              layout
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {visible.map((p, i) => (
                  <ProjectCard key={p.name} p={p} i={i} />
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>

          {/* Counter */}
          <Reveal delay={0.1}>
            <p className="mt-10 text-center text-xs uppercase tracking-[0.22em] text-ink/40">
              Showing{" "}
              <span className="text-ink/70 font-medium">
                {visible.length}
              </span>{" "}
              {visible.length === 1 ? "product" : "products"}
              {active !== ALL && (
                <>
                  {" "}
                  in{" "}
                  <span className="text-gold-dark">{active}</span>
                </>
              )}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
