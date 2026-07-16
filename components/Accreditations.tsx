import Image from "next/image";
import QuoteMark from "./QuoteMark";

// Drop the real logo SVGs into public/logos/ using these filenames.
const badges = [
  { src: "/logos/gas-safe.svg", alt: "Gas Safe Register", width: 120, height: 80 },
  { src: "/logos/napit.svg", alt: "NAPIT", width: 120, height: 80 },
  {
    src: "/logos/master-builders.svg",
    alt: "Federation of Master Builders",
    width: 160,
    height: 80,
  },
];

export default function Accreditations() {
  return (
    <section className="border-y border-white/10 bg-dark text-white">
      <div className="container-site py-12 md:py-14">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:gap-14 lg:text-left">
          <p className="shrink-0 text-xl leading-relaxed sm:text-2xl">
            Accredited.
            <br />
            Qualified.
            <br />
            <span className="text-brand">Trusted.</span>
          </p>

          <div className="hidden h-28 w-px bg-white/15 lg:block" aria-hidden="true" />

          <ul className="flex flex-1 flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12 lg:justify-evenly lg:gap-x-16">
            {badges.map((badge) => (
              <li key={badge.alt}>
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  width={badge.width}
                  height={badge.height}
                  className="h-12 w-auto sm:h-16 lg:h-20"
                />
              </li>
            ))}
          </ul>

          <div className="hidden h-28 w-px bg-white/15 lg:block" aria-hidden="true" />

          <figure className="flex max-w-md shrink-0 items-start gap-4 text-left">
            <QuoteMark className="h-9 w-9 shrink-0" />
            <div>
              <blockquote className="text-xl leading-snug sm:text-2xl">
                A trusted partner we can rely on, every time.
              </blockquote>
              <figcaption className="mt-3 text-brand">
                – Leaders Romans Group
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
