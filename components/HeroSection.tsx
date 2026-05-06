"use client";

import Image from "next/image";
import Link from "next/link";
import { useModal } from "@/components/ModalContext";

export default function HeroSection() {
  const { openModal } = useModal();

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <Image
        src="/images/hero/hero-bg-original.webp"
        alt="Warm coffee shop interior with rich espresso drinks"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        quality={100}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(30,14,2,0.82) 0%, rgba(30,14,2,0.45) 60%, rgba(30,14,2,0.15) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-xl flex flex-col gap-6">
          <span className="font-body text-xs font-medium uppercase tracking-widest text-accent">
            Specialty Coffee &amp; More · London
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-cream">
            Where Every Cup Tells a Story
          </h1>
          <p className="font-body text-base md:text-lg leading-relaxed text-cream/80 max-w-md">
            Hand-crafted espresso drinks, cold brews, fresh pastries and
            seasonal sandwiches — made with love in every batch, ready for
            you every morning.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-body font-medium text-cream hover:bg-accent-dark active:scale-95 transition-all shadow-warm-md"
            >
              Reserve a Table
            </button>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-base font-body font-medium text-cream hover:bg-cream/10 active:scale-95 transition-all"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
