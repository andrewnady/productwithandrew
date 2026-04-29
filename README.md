# Product With Andrew — Studio Website

A production-ready Next.js 14 website for **Product With Andrew**, a Product Strategy & Launch Studio.

Premium, minimal, modern SaaS aesthetic — inspired by Apple, Linear and Notion.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (custom design tokens for gold accent, serif/sans pairing)
- **Framer Motion** for scroll & enter animations
- **Lucide React** icons
- **Google Fonts**: Saira Stencil One (display — matches brand logo) + Inter (body)
- **SEO**: metadata, OpenGraph, Twitter card, JSON-LD structured data (Organization, Person, ProfessionalService, WebSite, ItemList), dynamic OG image, sitemap, robots, manifest, favicons, semantic HTML, skip-link

## Logo Asset

Save your brand logo files in the `public/` folder:

- `public/logo.png` — full **PRODUCT WITH ANDREW** wordmark (used in navbar & footer)
- `public/logo-square.png` — 1024×1024 square version (used for OG, favicon, manifest)

The components reference `/logo.png` and `/logo-square.png`.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
  layout.tsx              # Root layout, fonts, SEO metadata, JSON-LD
  page.tsx                # Composes the homepage + skip-link
  globals.css             # Tailwind layers + custom utilities
  sitemap.ts              # XML sitemap
  robots.ts               # robots.txt
  manifest.ts             # PWA manifest
  opengraph-image.tsx     # Dynamic 1200x630 OG image
components/
  Navbar.tsx        # Sticky nav with mobile drawer
  Hero.tsx          # Headline + CTAs + trust strip
  OwnedProducts.tsx # Studio-owned brands (Hurghada / Sharm El Sheikh)
  Portfolio.tsx     # Grouped portfolio (AI/SaaS, Data, Consumer, etc.)
  Framework.tsx     # 0→1 vertical timeline (8 steps)
  Credibility.tsx   # Stats + Upwork CTA
  Contact.tsx       # Form (mailto fallback) + Calendly CTA
  Footer.tsx
  Reveal.tsx        # Reusable scroll-reveal animation
  SectionHeader.tsx # Reusable section header
tailwind.config.ts  # Gold palette, fonts, shadows, animations
```

## Design Tokens

- `gold` `#C9A96E` (`gold.light` / `gold.dark` variants)
- `ink` `#0A0A0A`
- `bone` `#FAFAF7`
- `stone-50/100/200` light gray sections
- Display: Saira Stencil One (italicized via CSS to match logo slant), Sans: Inter
- Shadows: `soft`, `lift`, `gold`

## Customization

- Update copy in each component file directly.
- Update portfolio items in `components/Portfolio.tsx` (`groups` array).
- Update studio-owned products in `components/OwnedProducts.tsx`.
- Update stats in `components/Credibility.tsx`.
- The contact form uses a `mailto:` fallback. Wire it to your backend / Resend / Formspree by editing `onSubmit` in `components/Contact.tsx`.

## Deployment

Optimized for Vercel. Push to a Git repo and import into Vercel — zero config.
