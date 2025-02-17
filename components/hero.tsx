import Image from "next/image"

export function Hero() {
  return (
    <section className="relative h-screen">
      <Image
        src="/2024-Botanical-ag-doc-2877-0024-pub-2@2x.svg"  // Use relative path from /public folder
        alt="Yale School of Art Gallery"
        layout="fill" // Use layout="fill" instead of fill
        objectFit="cover" // Ensures image covers the section
        objectPosition="center top"
        priority
      />
      <div className="absolute bottom-12 left-[70px] w-[683px]">
        <p className="font-inter text-[14px] font-normal text-black leading-snug tracking-wide">
          The School of Art is one of Yale's Graduate & Professional Schools conferring MFA degrees in Graphic Design,
          Painting/Printmaking, Photography, and Sculpture; and offers undergraduate-level art courses to Yale College students.
        </p>
      </div>
    </section>
  )
}
