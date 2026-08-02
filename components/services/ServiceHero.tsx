import Image from "next/image";
import Link from "next/link";

type ServiceHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  /** Short proof points shown as pills under the copy. */
  chips?: readonly string[];
  image: { src: string; alt: string };
};

function Chevron() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 text-neutral-600"
      aria-hidden="true"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export default function ServiceHero({
  eyebrow,
  title,
  description,
  chips = [],
  image,
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-dark text-white">
      {/* Full-bleed and dimmed on mobile, right half at full strength on md+ */}
      <div
        className="absolute inset-0 bg-neutral-900 md:left-auto md:w-[55%]"
        aria-hidden="true"
      >
        <Image
          src={image.src}
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 55vw, 100vw"
          className="object-cover opacity-20 md:opacity-100"
        />
      </div>
      {/* Fade the image into the dark left side */}
      <div
        className="absolute inset-y-0 right-0 hidden w-[55%] bg-linear-to-r from-dark via-dark/40 to-transparent md:block"
        aria-hidden="true"
      />

      <div className="container-site relative py-14 md:py-20 lg:py-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-400">
            <li>
              <Link href="/" className="transition-colors hover:text-brand">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <Chevron />
            </li>
            <li>
              <Link
                href="/services"
                className="transition-colors hover:text-brand"
              >
                Services
              </Link>
            </li>
            <li aria-hidden="true">
              <Chevron />
            </li>
            <li className="text-neutral-200" aria-current="page">
              {eyebrow}
            </li>
          </ol>
        </nav>

        <div className="mt-8 max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            {eyebrow}
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-neutral-200">
            {description}
          </p>

          {chips.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {chips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-neutral-100 backdrop-blur-sm"
                >
                  {chip}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-brand px-7 py-4 font-bold text-black transition-colors hover:bg-brand-dark"
            >
              Get a quote
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
            <a
              href="tel:01242903123"
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/25 bg-white/5 px-7 py-4 font-bold text-white transition-colors hover:border-brand hover:text-brand"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-brand"
                aria-hidden="true"
              >
                <path d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z" />
              </svg>
              01242 903 123
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
