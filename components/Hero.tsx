import Link from "next/link";

function Star() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-400"
      aria-hidden="true"
    >
      <path d="M12 2l2.94 6.36 6.96.82-5.15 4.75 1.38 6.87L12 17.4 5.87 20.8l1.38-6.87L2.1 9.18l6.96-.82L12 2z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="h-10 w-10 text-brand"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark text-white">
      {/* Hero image — full-bleed and dimmed on mobile, right 3/5 at full strength on md+ */}
      <div
        className="absolute inset-0 bg-neutral-900 bg-[url('/images/hero_img.jpg')] bg-cover bg-center opacity-20 md:left-auto md:w-3/5 md:opacity-100"
        aria-hidden="true"
      />
      {/* Fade the image into the dark left side */}
      <div
        className="absolute inset-y-0 right-0 hidden w-3/5 bg-linear-to-r from-dark via-dark/40 to-transparent md:block"
        aria-hidden="true"
      />

      <div className="container-site relative py-16 md:py-24">
        <div className="max-w-xl">


          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Property maintenance,{" "}
            <span className="text-brand">done properly.</span>
          </h1>

          <p className="mt-6 text-lg text-neutral-200 sm:text-xl">
            Fast response. Quality workmanship.
            <br />
            One trusted partner for every trade.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-brand px-7 py-4 font-bold text-black transition-colors hover:bg-brand-dark"
            >
              Talk to our team
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
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/5 px-7 py-4 font-bold text-white transition-colors hover:border-brand hover:text-brand"
            >
              Explore our services
            </Link>
          </div>

          <div className="mt-10">
            <p className="text-sm text-neutral-300">
              Trusted by leading letting agents
            </p>
            <div className="mt-2 flex items-center gap-3">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className="text-sm text-neutral-200">4.8 from 120+ reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fast response badge — right-aligned to the site container, matching the navbar CTA */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 hidden md:block">
        <div className="container-site flex justify-end">
          <div className="pointer-events-auto flex items-center gap-4 rounded-2xl bg-black/70 px-6 py-5 backdrop-blur-sm">
            <ClockIcon />
            <div>
              <p className="font-bold">Fast response</p>
              <p className="text-sm text-neutral-400">When you need us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
