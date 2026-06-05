"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#products", label: "Products" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#framework", label: "Framework" },
  { href: "#credibility", label: "Credibility" },
  { href: "#contact", label: "Contact" },
  { href: "/upwork-book", label: "Book" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-stone-100"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-24 md:h-28 items-center justify-between">
        <a
          href="#top"
          className="flex items-center group -my-2"
          aria-label="Product With Andrew — Home"
        >
          <Image
            src="/logo.png"
            alt="Product With Andrew — Product Strategy & Launch Studio"
            width={640}
            height={640}
            priority
            quality={100}
            className="h-24 md:h-28 w-auto object-contain"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-ink/70 hover:text-ink transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://calendly.com/andrewnady/30-min-consultation-call"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-ink text-white text-sm px-4 py-2 hover:bg-gold transition-colors duration-300"
        >
          Book a Call
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2 text-ink"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 bg-white border-b border-stone-100 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="container-x py-4 flex flex-col gap-3">
          {links.map((l) => (
            <li key={l.href}>
              <a
                onClick={() => setOpen(false)}
                href={l.href}
                className="block py-2 text-ink/80"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://calendly.com/andrewnady/30-min-consultation-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-ink text-white text-sm px-4 py-2 mt-2"
            >
              Book a Call
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
