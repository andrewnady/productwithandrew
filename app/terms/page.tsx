import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms & Conditions for purchasing and using digital products from Product with Andrew LLC.",
  alternates: { canonical: "https://productwithandrew.com/terms" },
};

export default function Terms() {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-36 md:pt-44 pb-24">
        <div className="container-x max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-gold mb-3">
            Legal
          </p>
          <h1 className="h-display text-4xl md:text-5xl">Terms &amp; Conditions</h1>
          <p className="mt-4 text-sm text-ink/50">Last updated: June 2026</p>

          <div className="mt-10 space-y-8 text-ink/75 leading-relaxed">
            <section>
              <h2 className="h-display text-xl text-ink mb-3">1. Agreement</h2>
              <p>
                By accessing productwithandrew.com and purchasing our digital
                products, you agree to these Terms &amp; Conditions. If you do
                not agree, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="h-display text-xl text-ink mb-3">
                2. Digital Products
              </h2>
              <p>
                Our products are digital goods (e-books, templates, and tools)
                delivered electronically. Upon successful payment, you receive
                instant access to download your purchase. A valid email address
                is required for delivery.
              </p>
            </section>

            <section>
              <h2 className="h-display text-xl text-ink mb-3">3. License & Use</h2>
              <p>
                When you purchase a digital product, you are granted a personal,
                non-transferable license for your own use. You may not resell,
                redistribute, share, or reproduce the content for commercial
                purposes without written permission.
              </p>
            </section>

            <section>
              <h2 className="h-display text-xl text-ink mb-3">
                4. Intellectual Property
              </h2>
              <p>
                All content, including the book, templates, branding, and
                website materials, is the intellectual property of Product with
                Andrew LLC and is protected by applicable copyright laws.
              </p>
            </section>

            <section>
              <h2 className="h-display text-xl text-ink mb-3">5. Refunds</h2>
              <p>
                We offer a 14-day money-back guarantee. See our{" "}
                <a
                  href="/refund-policy"
                  className="text-gold underline hover:text-gold-dark"
                >
                  Refund Policy
                </a>{" "}
                for full details.
              </p>
            </section>

            <section>
              <h2 className="h-display text-xl text-ink mb-3">
                6. Disclaimer
              </h2>
              <p>
                Our products share strategies and experiences for educational
                purposes. We make no guarantee of specific income or results, as
                outcomes depend on individual effort, skills, and market
                conditions.
              </p>
            </section>

            <section>
              <h2 className="h-display text-xl text-ink mb-3">7. Contact</h2>
              <p>
                Questions about these Terms? Contact us at{" "}
                <a
                  href="mailto:info@productwithandrew.com"
                  className="text-gold underline hover:text-gold-dark"
                >
                  info@productwithandrew.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
