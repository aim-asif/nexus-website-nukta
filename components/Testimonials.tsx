"use client";

import { useState } from "react";

type Testimonial = {
  quote: string;
  attribution: string;
  client: string;
};

// Add more testimonials here — the carousel paginates automatically (3 per page on desktop).
const testimonials: Testimonial[] = [
  {
    quote:
      "Nexus are reliable, professional and respond quickly every time. A great team to work with.",
    attribution: "Leaders Romans Group",
    client: "LEADERS",
  },
  {
    quote:
      "The communication is excellent and the quality of work is always high.",
    attribution: "Perry Bishop",
    client: "Perry Bishop",
  },
  {
    quote:
      "We trust Nexus to look after our landlords and tenants. Highly recommend.",
    attribution: "Andrews Property Group",
    client: "ANDREWS PROPERTY GROUP",
  },
];

const PAGE_SIZE = 3;

function QuoteMark() {
  return (
    <svg
      viewBox="0 0 32 24"
      fill="currentColor"
      className="h-8 w-8 text-brand"
      aria-hidden="true"
    >
      <path d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0l1.6 4C9.2 5.2 6.8 8 6.8 12h6.8v12H0zm17.6 0V14.4c0-8 4.8-13.2 12.8-14.4l1.6 4c-5.2 1.2-7.6 4-7.6 8h6.8v12H17.6z" />
    </svg>
  );
}

function ArrowButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Previous testimonials" : "Next testimonials"}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-brand hover:text-brand disabled:pointer-events-none disabled:opacity-30"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        {direction === "left" ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
      </svg>
    </button>
  );
}

export default function Testimonials() {
  const pageCount = Math.ceil(testimonials.length / PAGE_SIZE);
  const [page, setPage] = useState(0);

  const visible = testimonials.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="bg-dark text-white">
      <div className="container-site py-16 md:py-20">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              What our clients say
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by leading letting agents.
            </h2>
          </div>

          {pageCount > 1 && (
            <div className="flex items-center gap-3">
              <ArrowButton
                direction="left"
                disabled={page === 0}
                onClick={() => setPage((p) => Math.max(0, p - 1))}
              />
              <ArrowButton
                direction="right"
                disabled={page === pageCount - 1}
                onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
              />
            </div>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {visible.map((testimonial) => (
            <figure
              key={testimonial.attribution}
              className="flex flex-col justify-between rounded-2xl bg-white/5 p-8"
            >
              <div>
                <QuoteMark />
                <blockquote className="mt-5 text-lg leading-relaxed text-neutral-100">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-4 text-sm text-brand">
                  — {testimonial.attribution}
                </figcaption>
              </div>
              <p className="mt-8 text-xl font-semibold text-neutral-300">
                {testimonial.client}
              </p>
            </figure>
          ))}
        </div>

        {pageCount > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to page ${i + 1}`}
                onClick={() => setPage(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === page ? "bg-brand" : "bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
