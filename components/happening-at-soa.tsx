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
]

export function HappeningAtSoa() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-playfair mb-8">Happening at SOA</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <a
              key={event.title}
              href={event.href}
              className="block p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

