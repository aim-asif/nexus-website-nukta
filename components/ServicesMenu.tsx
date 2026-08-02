"use client";

import Link from "next/link";
import { useState } from "react";

const iconProps = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "h-7 w-7 shrink-0",
  "aria-hidden": true,
} as const;

export const servicesMenuItems = [
  {
    label: "Flooring",
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
    label: "Interior Decoration",
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
    label: "Roofing",
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
    label: "Gardening",
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
    label: "Handyman",
    href: "/services#handyman",
    icon: (
      <svg {...iconProps}>
        <path d="M8 24l10-10M18 14l-2-2 5-5 4 4-5 5-2-2z" />
        <path d="M8 24l-2 4 4-2 8-8" />
      </svg>
    ),
  },
  {
    label: "Cleaning",
    href: "/services#cleaning",
    icon: (
      <svg {...iconProps}>
        <path d="M11 12h6l1 4v11h-8V16l1-4zM12 12V9h4v3" />
        <path d="M22 18v6M20 21h4M23 8v3M21.5 9.5h3" />
      </svg>
    ),
  },
  {
    label: "Kitchen Installs",
    href: "/services#kitchen-installs",
    icon: (
      <svg {...iconProps}>
        <rect x="7" y="6" width="18" height="21" rx="1.5" />
        <path d="M12 4h8v4h-8zM12 13h2M17 13h4M12 18h2M17 18h4" />
      </svg>
    ),
  },
  {
    label: "Bathroom Installs",
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
    label: "Boilers",
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
    label: "Emergency Call Outs",
    href: "/services#emergency-call-outs",
    icon: (
      <svg {...iconProps}>
        <path d="M16 6v6l4 2" />
        <circle cx="16" cy="16" r="10" />
        <path d="M16 10v1" strokeWidth="2" />
      </svg>
    ),
  },
] as const;

function ServicesGrid({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <ul className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-3">
      {servicesMenuItems.map((service) => (
        <li key={service.href}>
          <Link
            href={service.href}
            onClick={onNavigate}
            className="group flex items-center gap-3 rounded-lg px-4 py-3.5 transition-all duration-200 ease-out hover:translate-x-0.5 hover:bg-white/5"
          >
            <span className="text-brand transition-all duration-200 ease-out group-hover:scale-110 group-hover:text-brand-dark">
              {service.icon}
            </span>
            <span className="text-sm font-medium leading-snug text-white transition-colors duration-200 group-hover:text-brand">
              {service.label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

type ServicesNavItemProps = {
  open: boolean;
  onOpen: () => void;
};

export function ServicesNavItem({ open, onOpen }: ServicesNavItemProps) {
  return (
    <div onMouseEnter={onOpen}>
      <Link
        href="/services"
        className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-brand xl:text-base"
        aria-expanded={open}
        aria-haspopup="true"
      >
        Services
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </Link>
    </div>
  );
}

type ServicesPopoverProps = {
  open: boolean;
  onClose: () => void;
};

export function ServicesPopover({ open, onClose }: ServicesPopoverProps) {
  if (!open) return null;

  return (
    <div
      className="absolute inset-x-0 top-full z-50 hidden pt-3 lg:block"
      onMouseLeave={onClose}
    >
      <div className="container-site flex justify-center">
        <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-neutral-900 p-8 shadow-2xl shadow-black/50 transition-all duration-200 ease-out">
          <ServicesGrid />
          <div className="mt-4 border-t border-white/10 pt-4">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
            >
              View all services
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ServicesMobileSection({ onNavigate }: { onNavigate: () => void }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li>
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-md px-2 py-3 font-medium transition-colors hover:bg-white/5 hover:text-brand"
        aria-expanded={expanded}
        onClick={() => setExpanded((value) => !value)}
      >
        Services
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {expanded && (
        <div className="px-2 pb-2">
          <ServicesGrid onNavigate={onNavigate} />
        </div>
      )}
    </li>
  );
}
