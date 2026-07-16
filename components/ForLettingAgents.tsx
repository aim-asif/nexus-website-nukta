import Link from "next/link";
import StatsBar from "./StatsBar";

const checklist = [
  "Dedicated account manager",
  "Accurate quotes",
  "Fast communication",
  "Quality assured work",
  "Live job updates & photos",
  "Compliance & safety first",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5 shrink-0 text-brand"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m8 12.5 2.5 2.5L16 9.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ForLettingAgents() {
  return (
    <section className="relative overflow-hidden bg-dark text-white">
      {/* Image */}
      <div
        className="absolute inset-y-0 right-0 hidden w-1/2 bg-neutral-900 bg-[url('/images/let-agent-section.png')] bg-cover bg-center lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 hidden w-1/2 bg-linear-to-r from-dark via-dark/40 to-transparent lg:block"
        aria-hidden="true"
      />

      <div className="container-site relative py-16 md:py-20">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            For letting agents
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            A better maintenance experience for{" "}
            <span className="text-brand">you</span> and{" "}
            <span className="text-brand">your tenants.</span>
          </h2>

          <p className="mt-6 text-lg text-neutral-300">
            We make property maintenance simple, transparent and
            stress-free.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckIcon />
                <span className="text-neutral-100">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/for-letting-agents"
            className="mt-9 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-brand px-7 py-4 font-bold text-black transition-colors hover:bg-brand-dark sm:w-auto"
          >
            Learn more
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
        </div>

        {/* Mobile image — the desktop version sits absolutely on the right half */}
        <div className="relative mt-12 -mx-6 sm:-mx-12 lg:hidden" aria-hidden="true">
          <div className="h-72 bg-[url('/images/let-agent-section.png')] bg-cover bg-center sm:h-96" />
          <div className="absolute inset-0 bg-linear-to-b from-dark via-transparent to-dark" />
        </div>
      </div>

      <StatsBar />
    </section>
  );
}
