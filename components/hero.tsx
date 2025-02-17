import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-[600px]">
      <Image
        src="/hero-image.png"
        alt="Yale School of Art Gallery"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
        <div className="max-w-7xl px-4 sm:px-6 text-white">
          <p className="text-sm text-left" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
            The School of Art is one of Yale's Graduate & Professional Schools conferring MFA degrees in Graphic Design,
            Painting/Printmaking, Photography, and Sculpture, and preliminary-level studies in graphic design.
          </p>
        </div>
      </div>
    </section>
  )
}
