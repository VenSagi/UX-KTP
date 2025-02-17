import Image from "next/image"
import Link from "next/link"

const areas = [
  {
    title: "Graphic Design",
    image:
      "/aos-graphic-design.png",
    href: "#",
  },
  {
    title: "Painting/Printmaking",
    image:
      "/aos-painting.png",
    href: "#",
  },
  {
    title: "Photography",
    image:
      "/aos-photography.png",
    href: "#",
  },
]

export function AreasOfStudy() {
  return (
    <section className="py-16 bg-[#1E3866]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl text-white font-playfair mb-12">Areas of Study</h2>
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
              <h3 className="text-xl text-white font-medium">{area.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

