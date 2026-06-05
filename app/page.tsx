import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BookBanner from "@/components/BookBanner";
import ProfileCard from "@/components/ProfileCard";
import OwnedProducts from "@/components/OwnedProducts";
import Portfolio from "@/components/Portfolio";
import Framework from "@/components/Framework";
import Credibility from "@/components/Credibility";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Product With Andrew — Product Strategy & Launch Studio",
  description:
    "Product With Andrew is a Product Strategy & Launch Studio led by Andrew Nady. AI products, SaaS, marketplaces and platforms — from idea validation to launch and growth.",
  alternates: { canonical: "https://productwithandrew.com" },
};

export default function Home() {
  return (
    <>
      {/* Skip link for keyboard / screen-reader users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-ink focus:text-white focus:px-3 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>

      <Navbar />
      <main id="main">
        <Hero />
        <BookBanner />
        <ProfileCard />
        <OwnedProducts />
        <Portfolio />
        <Framework />
        <Credibility />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
