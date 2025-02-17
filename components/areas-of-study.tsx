import Image from "next/image"
import Link from "next/link"

const areas = [
  {
    title: "Graphic Design",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f5f5f5'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='24' fill='%23666'%3EGraphic Design%3C/text%3E%3Cpath d='M150 100 L250 200 M250 100 L150 200' stroke='%23999' stroke-width='2'/%3E%3C/svg%3E",
    href: "#",
  },
  {
    title: "Painting/Printmaking",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f5f5f5'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='24' fill='%23666'%3EPainting/%3C/text%3E%3Ctext x='50%25' y='60%25' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='24' fill='%23666'%3EPrintmaking%3C/text%3E%3C/svg%3E",
    href: "#",
  },
  {
    title: "Photography",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f5f5f5'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='24' fill='%23666'%3EPhotography%3C/text%3E%3Ccircle cx='200' cy='150' r='50' stroke='%23999' stroke-width='2' fill='none'/%3E%3C/svg%3E",
    href: "#",
  },
]

export function AreasOfStudy() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-playfair mb-12">Areas of Study</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area) => (
            <Link key={area.title} href={area.href} className="group">
              <div className="relative h-48 mb-4 overflow-hidden bg-gray-100">
                <Image
                  src={area.image || "/placeholder.svg"}
                  alt={area.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-medium">{area.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

