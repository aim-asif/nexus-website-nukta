import Link from "next/link";
import Image from "next/image";

const footerColumns = [
  {
    heading: "Services",
    links: [
      { label: "Plumbing", href: "/services/plumbing" },
      { label: "Heating", href: "/services/heating" },
      { label: "Decorating", href: "/services/decorating" },
      { label: "Kitchens", href: "/services/kitchens" },
      { label: "Handyman", href: "/services/handyman" },
      { label: "Cleaning", href: "/services/cleaning" },
      { label: "Landscaping", href: "/services/landscaping" },
      { label: "View all services", href: "/services" },
    ],
  },
  {
    heading: "For Letting Agents",
    links: [
      { label: "Why Nexus", href: "/for-letting-agents#why-nexus" },
      { label: "How we work", href: "/for-letting-agents#how-we-work" },
      { label: "Technology", href: "/for-letting-agents#technology" },
      { label: "Compliance", href: "/for-letting-agents#compliance" },
      { label: "Meet the team", href: "/for-letting-agents#team" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Our work", href: "/our-work" },
      { label: "Careers", href: "/careers" },
      { label: "News", href: "/news" },
      { label: "Contact us", href: "/contact" },
    ],
  },
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-brand" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-brand" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-brand" aria-hidden="true">
      <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M4.5 3.5A1.75 1.75 0 1 0 4.5 7a1.75 1.75 0 0 0 0-3.5zM3 8.75h3V21H3zM9 8.75h2.88v1.66h.04c.4-.76 1.38-1.56 2.85-1.56 3.05 0 3.61 2 3.61 4.6V21h-3v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="relative overflow-hidden">
        {/* Van image — bottom right, desktop only */}
        <div
          className="absolute bottom-0 right-0 hidden h-64 w-md bg-neutral-900 bg-[url('/images/footer_van.jpg')] bg-contain bg-bottom bg-no-repeat lg:block"
          aria-hidden="true"
        />

        <div className="container-site relative grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <Image src="/nexus_logo.svg" alt="Nexus" width={130} height={38} />
            <p className="mt-1 text-[0.6rem] font-light uppercase tracking-[0.32em] text-neutral-200">
              Property Maintenance
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-neutral-400">
              Property maintenance, repairs and improvements for letting
              agents across Gloucestershire.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link href="#" aria-label="Facebook" className="text-neutral-400 transition-colors hover:text-brand">
                <FacebookIcon />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-neutral-400 transition-colors hover:text-brand">
                <LinkedInIcon />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-neutral-400 transition-colors hover:text-brand">
                <InstagramIcon />
              </Link>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="font-bold text-white">{column.heading}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 transition-colors hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-bold text-white">Get in touch</h3>
            <ul className="mt-4 space-y-4 text-sm text-neutral-400">
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <a href="tel:01242903123" className="transition-colors hover:text-brand">
                  01242 903 123
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon />
                <a href="mailto:hello@nexuspm.co.uk" className="transition-colors hover:text-brand">
                  hello@nexuspm.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <PinIcon />
                <span>Gloucestershire &amp; surrounding areas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-2 py-6 text-sm text-neutral-400 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Nexus Property Maintenance Ltd.
            All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-brand">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-brand">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
