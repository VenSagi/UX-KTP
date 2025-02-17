import Image from "next/image"
import Link from "next/link"

const areas = [
  {
    title: "Graphic Design",
    image: "/maxresdefault.svg",
    href: "#",
  },
  {
    title: "Painting/Printmaking",
    image: "/hq720.svg",
    href: "#",
  },
  {
    title: "Photography",
    image: "/hq720-2.svg",
    href: "#",
  },
];

export function AreasOfStudy() {
  return (
    <section className="py-16 bg-[#1E3866] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Title */}
        <h2 className="text-3xl font-times mb-6 border-b-2 border-white inline-block pb-2">
          Areas of Study
        </h2>

        {/* Enable Horizontal Scrolling */}
        <div className="overflow-x-auto w-full">
          <div className="flex space-x-6 w-[1400px] md:w-max flex-nowrap">
            {areas.map((area) => (
              <Link key={area.title} href={area.href} className="group min-w-[400px]">
                <div className="relative h-[250px] overflow-hidden bg-gray-100 rounded-lg">
                  <Image
                    src={area.image}
                    alt={area.title}
                    width={400} 
                    height={250} 
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-times text-center mt-4">{area.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
