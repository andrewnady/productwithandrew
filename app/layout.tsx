import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Premium geometric sans for headlines — friendly, modern, bold.
const display = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const SITE_URL = "https://productwithandrew.com";
const SITE_NAME = "Product With Andrew";
const SITE_TITLE =
  "Product With Andrew — Product Strategy & Launch Studio";
const SITE_DESCRIPTION =
  "Product With Andrew is a Product Strategy & Launch Studio led by Andrew Nady. We turn ideas into scalable products — from 0 to launch. Specialists in AI products, SaaS, marketplaces and platforms.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Product With Andrew",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Product Strategy",
    "Product Launch Studio",
    "0 to 1 Product",
    "Product Manager Andrew Nady",
    "AI Product Strategy",
    "SaaS Product Strategy",
    "Marketplace Strategy",
    "Product Roadmap",
    "Go-to-market",
    "Andrew Nady",
    "Product With Andrew",
    "Product with Andrew LLC",
    "Hurghada Safari",
    "Sharm El Sheikh Safari",
  ],
  authors: [{ name: "Andrew Nady", url: SITE_URL }],
  creator: "Andrew Nady",
  publisher: "Product with Andrew LLC",
  category: "Technology",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/logo-square.png",
        width: 1024,
        height: 1024,
        alt: "Product With Andrew logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/logo-square.png"],
    creator: "@andrewnady",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "Product with Andrew LLC",
      alternateName: "Product With Andrew",
      url: SITE_URL,
      logo: `${SITE_URL}/logo-square.png`,
      description: SITE_DESCRIPTION,
      founder: { "@id": `${SITE_URL}#person` },
      sameAs: [
        "https://www.upwork.com/freelancers/andrewnady",
        "https://www.linkedin.com/in/andrewnady/",
        "https://hurghadasafari.travel",
        "https://sharmelsheikhsafari.com",
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      name: "Andrew Nady",
      url: SITE_URL,
      jobTitle: "Product Strategist & Launch Studio Founder",
      worksFor: { "@id": `${SITE_URL}#organization` },
      sameAs: [
        "https://www.upwork.com/freelancers/andrewnady",
        "https://www.linkedin.com/in/andrewnady/",
      ],
      knowsAbout: [
        "Product Strategy",
        "Product Management",
        "AI Products",
        "SaaS",
        "Marketplaces",
        "Go-to-market",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}#service`,
      name: "Product With Andrew — Product Strategy & Launch Studio",
      url: SITE_URL,
      image: `${SITE_URL}/logo-square.png`,
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: "Worldwide",
      serviceType: [
        "Product Strategy",
        "Product Roadmap",
        "Idea Validation",
        "UX & UI Design",
        "Product Development Leadership",
        "Launch & Growth",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "ItemList",
      name: "Products by Product With Andrew",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hurghada Safari", url: "https://hurghadasafari.travel" },
        { "@type": "ListItem", position: 2, name: "Sharm El Sheikh Safari", url: "https://sharmelsheikhsafari.com" },
        { "@type": "ListItem", position: 3, name: "Mio", url: "https://askmio.co" },
        { "@type": "ListItem", position: 4, name: "Pricelisto", url: "https://pricelisto.com" },
        { "@type": "ListItem", position: 5, name: "Balkanza", url: "https://balkanza.com" },
        { "@type": "ListItem", position: 6, name: "Gymdues", url: "http://gymdues.com" },
        { "@type": "ListItem", position: 7, name: "Engaz HR", url: "https://engazhr.com" },
        { "@type": "ListItem", position: 8, name: "Smart Poultry", url: "https://smartpoultry.ai" },
        { "@type": "ListItem", position: 9, name: "Tuwayq", url: "https://tuwayq.com" },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable}`}>
      <head>
        <Script
          id="ms-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "x4cqqob4bo");`,
          }}
        />
      </head>
      <body>
        {children}
        <Script
          id="ld-json-graph"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
