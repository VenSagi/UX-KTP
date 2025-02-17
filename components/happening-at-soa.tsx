const events = [
  {
    title: "Spring 2025 Exhibitions & Schedule  >",
    href: "#",
  },
  {
    title: "Spring 2025 Visiting Artists Lecture Schedule  >",
    href: "#",
  },
  {
    title: "Fall 2024 Archive  >",
    href: "#",
  },
];

export function HappeningAtSoa() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-playfair mb-8">Happening at SOA</h2>
        <div className="flex justify-between items-center gap-8">
          {events.map((event) => (
            <a
              key={event.title}
              href={event.href}
              className="flex items-center text-lg font-medium text-gray-900 hover:text-gray-700 transition-colors whitespace-nowrap"
            >
              <h3>{event.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
