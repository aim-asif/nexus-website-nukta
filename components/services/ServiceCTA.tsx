import Link from "next/link";

type ServiceCTAProps = {
  title: string;
  description: string;
};

export default function ServiceCTA({ title, description }: ServiceCTAProps) {
  return (
    <section className="bg-brand text-black">
      <div className="container-site py-14 md:py-16">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-black/70">
              {description}
            </p>
          </div>

          <div className="flex w-full flex-col gap-4 sm:flex-row lg:w-auto lg:shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-black px-7 py-4 font-bold text-white transition-colors hover:bg-neutral-800"
            >
              Request a quote
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
              className="inline-flex items-center justify-center rounded-lg border-2 border-black/25 px-7 py-4 font-bold text-black transition-colors hover:border-black"
            >
              01242 903 123
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
