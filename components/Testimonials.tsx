"use client";

import { useState, type ReactNode } from "react";

type Testimonial = {
  quote: string;
  attribution: string;
  logo: ReactNode;
};

// Add more testimonials here — the carousel advances one at a time (3 visible on desktop).
const testimonials: Testimonial[] = [
  {
    quote:
      "Nexus are reliable, professional and respond quickly every time. A great team to work with.",
    attribution: "Leaders Romans Group",
    logo: (
      <span className="flex items-center gap-3 font-serif text-white">
        <span className="text-4xl leading-none">L</span>
        <span className="h-8 w-px bg-white/50" aria-hidden="true" />
        <span className="text-2xl tracking-[0.2em]">LEADERS</span>
      </span>
    ),
  },
  {
    quote:
      "The communication is excellent and the quality of work is always high.",
    attribution: "Perry Bishop",
    logo: (
      <span className="font-serif text-white">
        <span className="text-3xl leading-none">Perry Bishop</span>
        <span className="mt-1 block text-[9px] tracking-[0.35em] text-neutral-400">
          PROPERTY MADE PERSONAL
        </span>
      </span>
    ),
  },
  {
    quote:
      "We trust Nexus to look after our landlords and tenants. Highly recommend.",
    attribution: "Andrews Property Group",
    logo: (
      <span className="text-white">
        <span className="text-2xl font-bold tracking-[0.08em]">ANDREWS</span>
        <span className="mt-0.5 block text-[10px] tracking-[0.3em] text-neutral-300">
          PROPERTY GROUP
        </span>
      </span>
    ),
  },
];

const VISIBLE = 3;

function QuoteMark() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className="h-7 w-7 text-brand"
      aria-hidden="true"
    >
      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
    </svg>
  );
}

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Previous testimonial" : "Next testimonial"}
      className="hidden shrink-0 self-center text-white transition-colors hover:text-brand lg:block"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8"
        aria-hidden="true"
      >
        {direction === "left" ? <path d="M15 5l-7 7 7 7" /> : <path d="M9 5l7 7-7 7" />}
      </svg>
    </button>
  );
}

export default function Testimonials() {
  const count = testimonials.length;
  const [start, setStart] = useState(0);

  const visible = Array.from(
    { length: Math.min(VISIBLE, count) },
    (_, i) => testimonials[(start + i) % count]
  );

  return (
    <section className="bg-dark text-white">
      <div className="container-site py-16 md:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-8">
          <div className="shrink-0 lg:w-1/4 lg:pt-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              What our clients say
            </p>
            <h2 className="mt-4 max-w-xs text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by leading letting agents.
            </h2>
          </div>

          <ArrowButton
            direction="left"
            onClick={() => setStart((s) => (s - 1 + count) % count)}
          />

          <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">
            {visible.map((testimonial) => (
              <figure
                key={testimonial.attribution}
                className="flex flex-col rounded-lg bg-white/5 p-8"
              >
                <QuoteMark />
                <blockquote className="mt-6 text-base leading-relaxed text-neutral-100">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-4 text-sm text-brand">
                  – {testimonial.attribution}
                </figcaption>
                <div className="mt-auto pt-8">{testimonial.logo}</div>
              </figure>
            ))}
          </div>

          <ArrowButton
            direction="right"
            onClick={() => setStart((s) => (s + 1) % count)}
          />
        </div>

        <div className="mt-10 flex items-center justify-center gap-2.5">
          {testimonials.map((testimonial, i) => (
            <button
              key={testimonial.attribution}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setStart(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === start ? "bg-brand" : "bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
