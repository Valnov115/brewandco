import Link from "next/link";
import { CupIcon } from "@/components/icons/CupIcon";
import { NAV_LINKS } from "@/components/constants/navigation";

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
