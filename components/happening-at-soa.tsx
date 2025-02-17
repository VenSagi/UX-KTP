const events = [
  {
    title: "Spring 2025 Exhibitions & Schedule",
    href: "#",
  },
  {
    title: "Spring 2025 Visiting Artists Lecture Schedule",
    href: "#",
  },
  {
    title: "Fall 2024 Archive",
    href: "#",
  },
];

export function HappeningAtSoa() {
  return (
    <section className="py-16 bg-[#FFFCFB] text-[#4B4A4A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Title */}
        <h2 className="text-3xl font-times font-bold border-b border-black pb-2 inline-block">
          Happening at SOA
        </h2>

        {/* Links Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-4 text-lg font-times">
          {events.map((event) => (
            <a
              key={event.title}
              href={event.href}
              className="block text-[#4B4A4A] hover:underline flex items-center space-x-2"
            >
              <span>{event.title}</span>
              <span>→</span> {/* Arrow Symbol */}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
