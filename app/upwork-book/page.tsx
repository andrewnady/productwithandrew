import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookPage from "@/components/BookPage";

export const metadata: Metadata = {
  title:
    "Zero to Six Figures on Upwork — The Freelancer's Playbook by Andrew Nady",
  description:
    "The exact system Andrew Nady used to go from zero reviews to $100K+ Top Rated Plus on Upwork. Proven proposal frameworks, profile teardowns, niche strategy, and the 4-lever method that gets replies.",
  keywords: [
    "how to start freelancing on Upwork",
    "Upwork tips and tricks",
    "Upwork proposal templates",
    "Upwork profile optimization",
    "how to get clients on Upwork",
    "zero to six figures Upwork",
    "freelancing guide for beginners",
    "Upwork Top Rated Plus",
    "Andrew Nady Upwork",
  ],
  alternates: {
    canonical: "https://productwithandrew.com/upwork-book",
    languages: {
      "en-US": "https://productwithandrew.com/upwork-book",
      "x-default": "https://productwithandrew.com/upwork-book",
    },
  },
  openGraph: {
    title: "Zero to Six Figures on Upwork — Andrew Nady",
    description:
      "The proven playbook: profile that sells, proposals that get replies, and the system that took a Cairo freelancer from 0 reviews to $100K+.",
    url: "https://productwithandrew.com/upwork-book",
    type: "website",
  },
};

export default function UpworkBookLandingPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-ink focus:text-white focus:px-3 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <BookPage />
      </main>
      <Footer />
    </>
  );
}
