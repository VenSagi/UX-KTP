const calendars = [
  {
    title: "Public Calendar",
    description: "Containing those events open to the public",
    image: "/public-calendar.png",
  },
  {
    title: "School of Art in The World",
    description:
      "Containing events and exhibitions hosted by, led by, or featuring members of the School of Art community",
    image: "/school-of-art.png",
  },
  {
    title: "Community Calendar",
    description: "Containing those events open only to the SoA community",
    image: "/community-calendar.png",
  },
]

export function Calendars() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-playfair mb-12">Calendars & Newsletters</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {calendars.map((calendar) => (
            <div key={calendar.title} className="bg-white p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-medium mb-2">{calendar.title}</h3>
                <p className="text-sm text-gray-600">{calendar.description}</p>
              </div>
              <div className="relative mt-4">
                <img
                  src={calendar.image}
                  alt={calendar.title}
                  className="object-cover w-full h-24 rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
