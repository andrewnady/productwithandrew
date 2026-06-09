import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CheckoutPage from "@/components/CheckoutPage";

export const metadata: Metadata = {
  title: "Get the Book — Zero to Six Figures on Upwork",
  description: "Complete your order for Zero to Six Figures on Upwork by Andrew Nady. Instant digital download.",
  alternates: {
    canonical: "https://productwithandrew.com/checkout",
    languages: {
      "en-US": "https://productwithandrew.com/checkout",
      "x-default": "https://productwithandrew.com/checkout",
    },
  },
  robots: { index: false },
};

export default function Checkout() {
  return (
    <>
      <Navbar />
      <main id="main">
        <CheckoutPage />
      </main>
      <Footer />
    </>
  );
}
