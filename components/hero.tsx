import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-[600px]">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desktop%20-%202-tPk3gyQHeDPpVstGMt40AcG0oUXtt9.png"
        alt="Yale School of Art Gallery"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
        <div className="max-w-3xl mx-auto text-white">
          <p className="text-sm">
            The School of Art is one of Yale's Graduate & Professional Schools conferring MFA degrees in Graphic Design,
            Painting/Printmaking, Photography, and Sculpture, and preliminary-level studies in graphic design.
          </p>
        </div>
      </div>
    </section>
  )
}

