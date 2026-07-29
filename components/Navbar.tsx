"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import {
  ServicesMobileSection,
  ServicesNavItem,
  ServicesPopover,
} from "./ServicesMenu";

const navLinks = [
  { label: "For Letting Agents", href: "/for-letting-agents" },
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header
      className="relative z-50 bg-dark text-white"
      onMouseLeave={() => setServicesOpen(false)}
    >
      <div className="container-site flex items-center justify-between gap-6 py-4">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <ServicesNavItem
            open={servicesOpen}
            onOpen={() => setServicesOpen(true)}
          />
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-brand xl:text-base"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-md bg-brand px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-brand-dark lg:inline-block"
        >
          Talk to our team
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 hover:text-brand lg:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <ServicesPopover
        open={servicesOpen}
        onClose={() => setServicesOpen(false)}
      />

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="container-site border-t border-white/10 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col gap-1">
            <ServicesMobileSection onNavigate={() => setMenuOpen(false)} />
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-2 py-3 font-medium transition-colors hover:bg-white/5 hover:text-brand"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-4 block rounded-md bg-brand px-6 py-3 text-center font-bold text-black transition-colors hover:bg-brand-dark"
            onClick={() => setMenuOpen(false)}
          >
            Talk to our team
          </Link>
        </nav>
      )}
    </header>
  );
}
