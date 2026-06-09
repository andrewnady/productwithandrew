import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Product with Andrew LLC — how we collect, use, and protect your information.",
  alternates: {
    canonical: "https://productwithandrew.com/privacy-policy",
    languages: {
      "en-US": "https://productwithandrew.com/privacy-policy",
      "x-default": "https://productwithandrew.com/privacy-policy",
    },
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-36 md:pt-44 pb-24">
        <div className="container-x max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-gold mb-3">
            Legal
          </p>
          <h1 className="h-display text-4xl md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-ink/50">Last updated: June 2026</p>

          <div className="mt-10 space-y-8 text-ink/75 leading-relaxed">
            <section>
              <h2 className="h-display text-xl text-ink mb-3">1. Introduction</h2>
              <p>
                Product with Andrew LLC (&quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;) operates productwithandrew.com. This Privacy
                Policy explains how we collect, use, and safeguard your
                information when you visit our website or purchase our digital
                products.
              </p>
            </section>

            <section>
              <h2 className="h-display text-xl text-ink mb-3">
                2. Information We Collect
              </h2>
              <p>
                We collect information you provide directly to us — such as your
                name and email address when you make a purchase or contact us. We
                also automatically collect usage data (pages visited, device and
                browser information) through analytics tools such as Microsoft
                Clarity to improve our website experience.
              </p>
            </section>

            <section>
              <h2 className="h-display text-xl text-ink mb-3">
                3. How We Use Your Information
              </h2>
              <p>
                We use your information to process orders and deliver digital
                products, respond to your inquiries, send important updates
                about your purchase, and improve our website and offerings. We do
                not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="h-display text-xl text-ink mb-3">
                4. Payment Processing
              </h2>
              <p>
                Payments are processed by secure third-party payment providers.
                We do not store your full credit card details on our servers.
              </p>
            </section>

            <section>
              <h2 className="h-display text-xl text-ink mb-3">5. Cookies & Analytics</h2>
              <p>
                We use cookies and analytics tools to understand how visitors
                interact with our site. You can disable cookies in your browser
                settings, though some features may not function properly.
              </p>
            </section>

            <section>
              <h2 className="h-display text-xl text-ink mb-3">6. Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your
                personal data at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="h-display text-xl text-ink mb-3">7. Contact</h2>
              <p>
                For any questions about this Privacy Policy, contact us at{" "}
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
