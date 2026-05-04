import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
];

const CupIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M6 1v3M10 1v3M14 1v3" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full border-t border-mocha/10 bg-bg">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
            <CupIcon />
          </span>
          <span className="font-display text-lg font-extrabold text-text">
            Brew &amp; Co.
          </span>
        </div>

        <nav className="flex items-center gap-6" aria-label="Footer navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-text-muted hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="font-body text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Brew &amp; Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
