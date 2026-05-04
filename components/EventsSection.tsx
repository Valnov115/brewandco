import Image from "next/image";

interface EventData {
  title: string;
  subtitle: string;
  description: string;
  dayLabel: string;
  timeLabel: string;
  nextDate: string; // "YYYY-MM-DD"
  pexelsId: number;
  accentClass: string; // Tailwind bg class for badge pill
}

interface EventsSectionProps {
  events: EventData[];
}

export default function EventsSection({ events }: EventsSectionProps) {
  return (
    <section className="py-20 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-3">
          <span className="font-body text-xs font-medium uppercase tracking-widest text-accent">
            What&apos;s On
          </span>
          <h2 className="font-display text-4xl font-extrabold leading-tight text-text">
            Upcoming Events
          </h2>
          <p className="font-body text-base text-text-body max-w-md">
            Join us for something a little different. These events run every
            week — no booking required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => {
            const dateObj = new Date(event.nextDate + "T00:00:00");
            const formattedDate = dateObj.toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            });

            return (
              <div
                key={event.title}
                className="overflow-hidden rounded-2xl bg-bg shadow-warm-md flex flex-col"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={`https://images.pexels.com/photos/${event.pexelsId}/pexels-photo-${event.pexelsId}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-block rounded-full px-4 py-1 text-xs font-body font-medium uppercase tracking-widest text-cream ${event.accentClass}`}
                    >
                      {event.subtitle}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-6">
                  <h3 className="font-display text-2xl font-extrabold text-text">
                    {event.title}
                  </h3>
                  <p className="font-body text-base text-text-body leading-relaxed">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1">
                    <span className="font-body text-sm text-text-muted">
                      {event.dayLabel} · {event.timeLabel}
                    </span>
                    <span className="font-body text-sm text-accent font-medium">
                      Next: {formattedDate}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
