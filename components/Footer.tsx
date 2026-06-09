import Image from "next/image";
import { Linkedin, Mail, Briefcase } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white">
      <div className="absolute top-0 inset-x-0 h-px bg-gold-gradient opacity-60" />
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a
              href="/"
              aria-label="Product With Andrew — Home"
              className="inline-flex items-center"
            >
              <Image
                src="/logo-wordmark-white.svg"
                alt="Product With Andrew — Product Strategy & Launch Studio"
                width={1167}
                height={302}
                className="h-14 md:h-16 w-auto object-contain"
              />
            </a>
            <p className="mt-5 max-w-md text-sm text-white/60 leading-relaxed">
              A product strategy & launch studio led by Andrew Nady. Turning
              ambitious ideas into shipped, scalable products — from 0 to
              launch.
            </p>
            <a
              href="https://calendly.com/andrewnady/30-min-consultation-call"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold text-ink px-5 py-2.5 text-sm font-medium hover:bg-white transition-colors"
            >
              Book a Call
            </a>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40">
              Connect
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="https://www.upwork.com/freelancers/andrewnady"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white/80 hover:text-gold transition-colors"
                >
                  <Briefcase size={16} /> Upwork — Top Rated Plus
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/andrewnady/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white/80 hover:text-gold transition-colors"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@productwithandrew.com"
                  className="inline-flex items-center gap-3 text-white/80 hover:text-gold transition-colors"
                >
                  <Mail size={16} /> info@productwithandrew.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-white/45">
          <p>
            © {new Date().getFullYear()} Product with Andrew LLC. All rights
            reserved. · 774-043-431
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-gold transition-colors"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-gold transition-colors">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a
                href="/refund-policy"
                className="hover:text-gold transition-colors"
              >
                Refund Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
