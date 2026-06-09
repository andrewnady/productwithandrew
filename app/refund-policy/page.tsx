import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "14-day money-back guarantee on digital products from Product with Andrew LLC.",
  alternates: {
    canonical: "https://productwithandrew.com/refund-policy",
    languages: {
      "en-US": "https://productwithandrew.com/refund-policy",
      "x-default": "https://productwithandrew.com/refund-policy",
    },
  },
};

export default function RefundPolicy() {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-36 md:pt-44 pb-24">
        <div className="container-x max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-gold mb-3">
            Legal
          </p>
          <h1 className="h-display text-4xl md:text-5xl">Refund Policy</h1>
          <p className="mt-4 text-sm text-ink/50">Last updated: June 2026</p>

          <div className="mt-10 space-y-8 text-ink/75 leading-relaxed">
            <section>
              <h2 className="h-display text-xl text-ink mb-3">
                14-Day Money-Back Guarantee
              </h2>
              <p>
                We stand behind the quality of our products. If you&apos;re not
                satisfied with your purchase, you may request a full refund
                within <strong>14 days</strong> of your purchase date — no
                complicated hoops.
              </p>
            </section>

            <section>
              <h2 className="h-display text-xl text-ink mb-3">
                How to Request a Refund
              </h2>
              <p>
                Simply email us at{" "}
                <a
                  href="mailto:info@productwithandrew.com"
                  className="text-gold underline hover:text-gold-dark"
                >
                  info@productwithandrew.com
                </a>{" "}
                with your order details (the email address used at checkout)
                within 14 days of purchase. We&apos;ll process your refund to
                your original payment method.
              </p>
            </section>

            <section>
              <h2 className="h-display text-xl text-ink mb-3">
                Processing Time
              </h2>
              <p>
                Approved refunds are typically processed within 5–10 business
                days, depending on your payment provider.
              </p>
            </section>

            <section>
              <h2 className="h-display text-xl text-ink mb-3">Questions?</h2>
              <p>
                If you have any questions about our Refund Policy, reach out to{" "}
                <a
                  href="mailto:info@productwithandrew.com"
                  className="text-gold underline hover:text-gold-dark"
                >
                  info@productwithandrew.com
                </a>{" "}
                — we&apos;re happy to help.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
