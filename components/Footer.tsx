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
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0 text-brand" aria-hidden="true">
      <path d="M6.6 10.8c1.4 2.7 3.6 4.9 6.3 6.3l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0 text-brand" aria-hidden="true">
      <path d="M20 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-.4 3.25-6.94 5.2a1.1 1.1 0 0 1-1.32 0L4.4 8.25a.75.75 0 1 1 .9-1.2L12 12.06l6.7-5.01a.75.75 0 1 1 .9 1.2z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0 text-brand" aria-hidden="true">
      <path d="M12 2a7.5 7.5 0 0 0-7.5 7.5C4.5 15.14 12 22 12 22s7.5-6.86 7.5-12.5A7.5 7.5 0 0 0 12 2zm0 10.25a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-9 w-9" aria-hidden="true">
      <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12c0 5.24 3.84 9.58 8.86 10.37v-7.34H7.7V12h2.66V9.69c0-2.63 1.57-4.08 3.96-4.08 1.15 0 2.35.2 2.35.2v2.58h-1.32c-1.3 0-1.71.81-1.71 1.64V12h2.91l-.47 3.03h-2.44v7.34c5.02-.79 8.86-5.13 8.86-10.37 0-5.8-4.7-10.5-10.5-10.5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-9 w-9" aria-hidden="true">
      <circle cx="12" cy="12" r="10.5" fill="currentColor" />
      <path
        fill="var(--dark)"
        d="M8.4 9.6H6.2v7.2h2.2V9.6zM7.3 8.6a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6zM12.1 9.6H10v7.2h2.15v-3.78c0-.95.4-1.72 1.4-1.72.94 0 1.15.8 1.15 1.78v3.72h2.15v-4.1c0-2.02-.86-3.28-2.6-3.28-1.05 0-1.75.5-2.1 1.16h-.05V9.6z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-9 w-9 p-1"
      aria-hidden="true"
    >
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
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[30%] max-w-2xl bg-[url('/images/footer-van-img.png')] bg-contain bg-right bg-no-repeat xl:block"
          aria-hidden="true"
        />

        <div className="container-site relative grid grid-cols-2 gap-x-6 gap-y-12 py-16 sm:gap-12 lg:grid-cols-6 xl:w-[74%] xl:pr-8" style={{ marginInline: "unset" }}>
          <div className="col-span-2">
            <Image src="/nexus_logo.svg" alt="Nexus" width={150} height={44} />
            <p className="mt-2 text-[0.65rem] font-light uppercase tracking-[0.32em] text-neutral-200">
              Property Maintenance
            </p>
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-neutral-200">
              Property maintenance, repairs and improvements for letting
              agents across Gloucestershire.
            </p>
            <div className="mt-8 flex items-center gap-6 text-brand">
              <Link href="#" aria-label="Facebook" className="transition-opacity hover:opacity-80">
                <FacebookIcon />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="transition-opacity hover:opacity-80">
                <LinkedInIcon />
              </Link>
              <Link href="#" aria-label="Instagram" className="transition-opacity hover:opacity-80">
                <InstagramIcon />
              </Link>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="font-bold text-white">{column.heading}</h3>
              <ul className="mt-5 space-y-3.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-neutral-300 transition-colors hover:text-brand"
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
            <ul className="mt-5 space-y-6 text-[15px] text-neutral-200">
              <li className="flex items-center gap-4">
                <PhoneIcon />
                <a href="tel:01242903123" className="transition-colors hover:text-brand">
                  01242 903 123
                </a>
              </li>
              <li className="flex items-center gap-4">
                <MailIcon />
                <a href="mailto:hello@nexuspm.co.uk" className="break-all transition-colors hover:text-brand">
                  hello@nexuspm.co.uk
                </a>
              </li>
              <li className="flex items-start gap-4">
                <PinIcon />
                <span>
                  Gloucestershire
                  <br />
                  &amp; surrounding areas
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-center text-sm text-neutral-300 sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Nexus Property Maintenance Ltd.
            All rights reserved.
          </p>
          <div className="flex items-center gap-10">
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
