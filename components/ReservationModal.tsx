"use client";

import { useState } from "react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormState {
  name: string;
  partySize: string;
  date: string;
  time: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  partySize: "2",
  date: "",
  time: "",
};

export default function ReservationModal({
  isOpen,
  onClose,
}: ReservationModalProps) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleClose() {
    setForm(INITIAL_FORM);
    setSubmitted(false);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-espresso/60 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative w-full max-w-md rounded-2xl bg-surface p-8 shadow-warm-lg">
        <button
          onClick={handleClose}
          className="absolute right-5 top-5 inline-flex h-8 w-8 items-center justify-center rounded-full text-text-muted hover:bg-bg hover:text-text transition-colors"
          aria-label="Close reservation modal"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {submitted ? (
          <div className="flex flex-col items-center gap-6 py-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-category-coffee">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h2 id="modal-title" className="font-display text-2xl font-extrabold text-text">
                You&apos;re booked in!
              </h2>
              <p className="font-body text-base text-text-body">
                We&apos;ve reserved a table for <strong>{form.partySize}</strong>{" "}
                on{" "}
                <strong>
                  {new Date(form.date + "T00:00:00").toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                  })}
                </strong>{" "}
                at <strong>{form.time}</strong>. See you soon,{" "}
                <strong>{form.name}</strong>!
              </p>
            </div>
            <button
              onClick={handleClose}
              className="inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 text-base font-body font-medium text-cream hover:bg-espresso active:scale-95 transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6 flex flex-col gap-1">
              <span className="font-body text-xs font-medium uppercase tracking-widest text-accent">
                Brew &amp; Co
              </span>
              <h2 id="modal-title" className="font-display text-2xl font-extrabold text-text">
                Reserve a Table
              </h2>
              <p className="font-body text-sm text-text-muted">
                Fill in the details below and we&apos;ll hold your spot.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="res-name" className="font-body text-sm font-medium text-text-body">
                  Full name
                </label>
                <input
                  id="res-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-full bg-bg px-5 py-3 text-base font-body text-text-body placeholder:text-text-muted outline-none border border-transparent focus:border-accent transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="res-party" className="font-body text-sm font-medium text-text-body">
                  Party size
                </label>
                <select
                  id="res-party"
                  name="partySize"
                  required
                  value={form.partySize}
                  onChange={handleChange}
                  className="w-full rounded-full bg-bg px-5 py-3 text-base font-body text-text-body outline-none border border-transparent focus:border-accent transition-colors appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={String(n)}>
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="res-date" className="font-body text-sm font-medium text-text-body">
                  Preferred date
                </label>
                <input
                  id="res-date"
                  name="date"
                  type="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full rounded-full bg-bg px-5 py-3 text-base font-body text-text-body outline-none border border-transparent focus:border-accent transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="res-time" className="font-body text-sm font-medium text-text-body">
                  Preferred time
                </label>
                <input
                  id="res-time"
                  name="time"
                  type="time"
                  required
                  value={form.time}
                  onChange={handleChange}
                  min="07:00"
                  max="21:00"
                  className="w-full rounded-full bg-bg px-5 py-3 text-base font-body text-text-body outline-none border border-transparent focus:border-accent transition-colors"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-body font-medium text-cream hover:bg-accent-dark active:scale-95 transition-all"
              >
                Confirm Reservation
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
