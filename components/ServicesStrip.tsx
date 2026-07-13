import Link from "next/link";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const iconProps = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-14 w-14",
  "aria-hidden": true,
} as const;

const services: Service[] = [
  {
    title: "Plumbing",
    description: "Leaks, repairs & installations",
    icon: (
      <svg {...iconProps}>
        <path d="M10 12v-2h12v2M16 10V7M12 7h8M10 12h4v4a4 4 0 0 1-4 4H8a2 2 0 0 0-2 2v3" />
        <path d="M24 18v3a2 2 0 0 1-2 2M24 25.5c0 1-1.5 2.5-1.5 3.5a1.5 1.5 0 0 0 3 0c0-1-1.5-2.5-1.5-3.5z" />
      </svg>
    ),
  },
  {
    title: "Heating",
    description: "Boiler servicing, repairs & installs",
    icon: (
      <svg {...iconProps}>
        <path d="M16 4c1 4-5 6.5-5 13a5 5 0 0 0 10 0c0-3-1.5-4.5-2.5-6-.5 1.5-1.5 2-2.5 2.5C17 11 18 7 16 4z" />
        <path d="M14 22.5a2.5 2.5 0 0 0 5 0c0-1.5-1.5-2.5-2.5-4-1 1.5-2.5 2.5-2.5 4z" />
      </svg>
    ),
  },
  {
    title: "Decorating",
    description: "Internal & external redecoration",
    icon: (
      <svg {...iconProps}>
        <rect x="7" y="5" width="16" height="7" rx="1.5" />
        <path d="M23 8h3v5h-10v4M16 17h-1v6h2v-6h-1z" />
        <path d="M15 23h2v4h-2z" />
      </svg>
    ),
  },
  {
    title: "Kitchens",
    description: "Supply & fit kitchens",
    icon: (
      <svg {...iconProps}>
        <rect x="7" y="6" width="18" height="21" rx="1.5" />
        <path d="M12 4h8v4h-8zM12 13h2M17 13h4M12 18h2M17 18h4M12 23h2M17 23h4" />
      </svg>
    ),
  },
  {
    title: "Handyman",
    description: "General repairs & odd jobs",
    icon: (
      <svg {...iconProps}>
        <path d="M8 24l10-10M18 14l-2-2 5-5 4 4-5 5-2-2z" />
        <path d="M8 24l-2 4 4-2 8-8" />
        <circle cx="24" cy="8" r="1" />
      </svg>
    ),
  },
  {
    title: "Cleaning",
    description: "Communal & end of tenancy cleans",
    icon: (
      <svg {...iconProps}>
        <path d="M11 12h6l1 4v11h-8V16l1-4zM12 12V9h4v3M12 9c0-2-1-2.5-3-2.5M9 6.5h7" />
        <path d="M22 18v6M20 21h4M23 8v3M21.5 9.5h3" />
      </svg>
    ),
  },
  {
    title: "Landscaping",
    description: "Gardens, lawns & exterior care",
    icon: (
      <svg {...iconProps}>
        <path d="M6 20l4-9h9l3 6" />
        <path d="M8 20h16l2 4M10 15h8" />
        <circle cx="9" cy="25" r="3" />
        <circle cx="23" cy="26" r="2" />
        <path d="M12 25h9" />
      </svg>
    ),
  },
  {
    title: "...and more",
    description: "Carpentry, roofing, electrical & more",
    icon: (
      <svg {...iconProps}>
        <circle cx="16" cy="16" r="11" />
        <path d="M11 16h.01M16 16h.01M21 16h.01" strokeWidth="2.5" />
      </svg>
    ),
  },
];

export default function ServicesStrip() {
  return (
    <section className="border-y border-white/10 bg-dark text-white">
      <div className="container-site py-10 md:py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Services we deliver
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Every trade. One standard.
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-brand"
          >
            <span className="underline decoration-brand underline-offset-8">
              View all services
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-brand transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-y-10 md:grid-cols-4 xl:grid-cols-8 xl:divide-x xl:divide-white/10">
          {services.map((service) => (
            <li
              key={service.title}
              className="flex flex-col items-center px-4 text-center"
            >
              <span className="text-brand">{service.icon}</span>
              <h3 className="mt-5 font-bold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
