import HeroSection from "@/components/HeroSection";
import PopularItemsSection from "@/components/PopularItemsSection";
import EventsSection from "@/components/EventsSection";

// Force dynamic rendering so getNextOccurrence() runs at request time,
// not frozen at build time. cacheComponents is NOT enabled in this project,
// so the route-segment-config `dynamic` export is the correct mechanism.
export const dynamic = "force-dynamic";

/**
 * Returns "YYYY-MM-DD" for the next occurrence of a given weekday.
 * @param targetDay - 0=Sun, 1=Mon, ..., 5=Fri, 6=Sat
 */
function getNextOccurrence(targetDay: number): string {
  const now = new Date();
  const todayUtc = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );
  const diff = (targetDay - todayUtc.getUTCDay() + 7) % 7 || 7;
  const target = new Date(todayUtc);
  target.setUTCDate(todayUtc.getUTCDate() + diff);
  return target.toISOString().split("T")[0];
}

const EVENTS = [
  {
    title: "Open Mic Night",
    subtitle: "Live Music",
    description:
      "Local musicians, spoken word artists and poets take the stage every Friday evening. Grab a drink and a seat — the line-up changes every week.",
    dayLabel: "Every Friday",
    timeLabel: "7:00 PM",
    nextDate: getNextOccurrence(5),
    pexelsId: 1105666,
    accentClass: "bg-accent",
  },
  {
    title: "Coffee Tasting",
    subtitle: "Workshop",
    description:
      "Our head barista guides you through single-origin beans, brew methods and tasting notes every Saturday morning. Free to attend — just show up curious.",
    dayLabel: "Every Saturday",
    timeLabel: "10:00 AM",
    nextDate: getNextOccurrence(6),
    pexelsId: 34505585,
    accentClass: "bg-category-coffee",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PopularItemsSection />
      <EventsSection events={EVENTS} />
    </>
  );
}
