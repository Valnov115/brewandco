"use client";

import { useState } from "react";
import Link from "next/link";
import ReservationModal from "@/components/ReservationModal";

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

export default function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-mocha/10 bg-bg/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 h-18 flex items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Brew & Co home">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent">
              <CupIcon />
            </span>
            <span className="font-display text-lg font-extrabold text-text">
              Brew &amp; Co.
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-base font-medium text-text-body hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-full bg-cta px-5 py-2.5 text-sm font-body font-medium text-cream hover:bg-espresso active:scale-95 transition-all shrink-0"
          >
            Reserve a Table
          </button>
        </div>
      </header>

      <ReservationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
