import Link from "next/link";

type Service = {
  title: string;
  description: string;
  href: string;
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

// Mirrors the confirmed services in the Services nav dropdown (servicesMenuItems
// in ServicesMenu.tsx), rendered here at a larger size with short descriptions.
const services: Service[] = [
  {
    title: "Flooring",
    description: "Supply & fit all floor types",
    href: "/services/flooring",
    icon: (
      <svg {...iconProps}>
        <rect x="5" y="8" width="22" height="4" rx="0.5" />
        <rect x="5" y="14" width="22" height="4" rx="0.5" />
        <rect x="5" y="20" width="22" height="4" rx="0.5" />
      </svg>
    ),
  },
  {
    title: "Interior Decoration",
    description: "Internal painting & finishing",
    href: "/services#interior-decoration",
    icon: (
      <svg {...iconProps}>
        <rect x="7" y="5" width="16" height="7" rx="1.5" />
        <path d="M23 8h3v5h-10v4M16 17h-1v6h2v-6h-1z" />
        <path d="M15 23h2v4h-2z" />
      </svg>
    ),
  },
  {
    title: "Roofing",
    description: "Repairs, replacements & leaks",
    href: "/services#roofing",
    icon: (
      <svg {...iconProps}>
        <path d="M4 18l12-10 12 10" />
        <path d="M8 18v8h16v-8" />
        <path d="M13 18v8M19 18v8" />
      </svg>
    ),
  },
  {
    title: "Gardening",
    description: "Lawns, planting & garden upkeep",
    href: "/services#gardening",
    icon: (
      <svg {...iconProps}>
        <path d="M16 26V14" />
        <path d="M16 14c-4-6-10-4-10 2s6 8 10 4" />
        <path d="M16 14c4-6 10-4 10 2s-6 8-10 4" />
        <path d="M10 26h12" />
      </svg>
    ),
  },
  {
    title: "Handyman",
    description: "General repairs & odd jobs",
    href: "/services#handyman",
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
    href: "/services#cleaning",
    icon: (
      <svg {...iconProps}>
        <path d="M11 12h6l1 4v11h-8V16l1-4zM12 12V9h4v3M12 9c0-2-1-2.5-3-2.5M9 6.5h7" />
        <path d="M22 18v6M20 21h4M23 8v3M21.5 9.5h3" />
      </svg>
    ),
  },
  {
    title: "Kitchen Installs",
    description: "Supply & fit kitchens",
    href: "/services#kitchen-installs",
    icon: (
      <svg {...iconProps}>
        <rect x="7" y="6" width="18" height="21" rx="1.5" />
        <path d="M12 4h8v4h-8zM12 13h2M17 13h4M12 18h2M17 18h4M12 23h2M17 23h4" />
      </svg>
    ),
  },
  {
    title: "Bathroom Installs",
    description: "Supply & fit bathrooms",
    href: "/services#bathroom-installs",
    icon: (
      <svg {...iconProps}>
        <path d="M6 20h20v4H6z" />
        <path d="M8 20V12a4 4 0 0 1 8 0v8" />
        <circle cx="20" cy="10" r="2" />
        <path d="M20 12v3" />
      </svg>
    ),
  },
  {
    title: "Boilers",
    description: "Servicing, repairs & installs",
    href: "/services#boilers",
    icon: (
      <svg {...iconProps}>
        <rect x="8" y="6" width="16" height="20" rx="2" />
        <path d="M12 12h8M12 16h8M12 20h5" />
        <path d="M16 4c1 3-4 5-4 9a4 4 0 0 0 8 0c0-2.5-1-3.5-2-5-.5 1-1 1.5-2 2z" />
      </svg>
    ),
  },
  {
    title: "Emergency Call Outs",
    description: "Rapid response when it matters",
    href: "/services#emergency-call-outs",
    icon: (
      <svg {...iconProps}>
        <path d="M16 6v6l4 2" />
        <circle cx="16" cy="16" r="10" />
        <path d="M16 10v1" strokeWidth="2.5" />
      </svg>
    ),
  },
];

function ViewAllLink({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/services"
      className={`group inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-brand ${className}`}
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
  );
}

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
          <ViewAllLink className="hidden md:inline-flex" />
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {services.map((service) => (
            <li key={service.title}>
              <Link
                href={service.href}
                className="group flex h-full flex-col items-center px-4 text-center"
              >
                <span className="text-brand transition-transform duration-200 ease-out group-hover:scale-110">
                  {service.icon}
                </span>
                <h3 className="mt-5 font-bold transition-colors group-hover:text-brand">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {service.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center md:hidden">
          <ViewAllLink />
        </div>
      </div>
    </section>
  );
}
