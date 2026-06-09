"use client";

import { useState, FormEvent } from "react";
import { Calendar, CheckCircle2, Send } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const WEB3FORMS_ACCESS_KEY = "09e5f077-0b18-41ea-9aef-93b1b91095bd";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", "New inquiry from productwithandrew.com");
    data.append("from_name", "Product With Andrew — Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-2 items-start">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="gold-rule" />
                <span className="text-xs uppercase tracking-[0.22em] text-gold-dark">
                  Contact
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h-display mt-4 text-[32px] sm:text-4xl md:text-5xl lg:text-6xl">
                Let&apos;s build something{" "}
                <span className="gold-text">worth shipping</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-ink/65 text-lg leading-relaxed max-w-md">
                Tell me about your idea. Whether you're at zero or scaling
                past one — I'll help you figure out what to build, and how to
                ship it.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href="https://calendly.com/andrewnady/30-min-consultation-call"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-sm font-medium hover:border-gold hover:text-gold transition-colors"
              >
                <Calendar size={16} /> Book a 30-min call
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="card-surface p-6 md:p-8 space-y-5"
            >
              {/* Honeypot — hidden from users, catches bots that fill every field */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <Field name="name" label="Name" placeholder="Your name" />
              <Field
                name="email"
                type="email"
                label="Email"
                placeholder="you@company.com"
              />
              <Field
                name="message"
                label="Message"
                placeholder="A little about your project, stage, and goals…"
                textarea
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center justify-center gap-2 w-full rounded-full bg-ink text-white px-6 py-3.5 text-sm font-medium hover:bg-gold transition-colors disabled:opacity-60"
              >
                {status === "sent" ? (
                  <>
                    <CheckCircle2 size={16} /> Message sent — thank you!
                  </>
                ) : status === "sending" ? (
                  <>Sending…</>
                ) : (
                  <>
                    Send Message
                    <Send
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </>
                )}
              </button>
              {status === "error" && (
                <p className="text-xs text-red-600 text-center">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
              <p className="text-xs text-ink/45 text-center">
                Or email{" "}
                <a className="underline" href="mailto:info@productwithandrew.com">
                  info@productwithandrew.com
                </a>
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  textarea,
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
}) {
  const baseCls =
    "w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition";
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.18em] text-ink/55 mb-2">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required
          rows={5}
          placeholder={placeholder}
          className={baseCls}
        />
      ) : (
        <input
          name={name}
          type={type}
          required
          placeholder={placeholder}
          className={baseCls}
        />
      )}
    </label>
  );
}
