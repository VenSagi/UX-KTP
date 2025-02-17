import Image from "next/image";

const calendars = [
  {
    title: "Public Calendar",
    description: "Containing those events open to the public.",
    image: "/ag-doc-2863-0015-pub.svg",
  },
  {
    title: "School of Art in The World",
    description:
      "Containing events and exhibitions hosted by, led by, or featuring members of the School of Art community.",
    image: "/ag-doc-2766-0013-pub.svg",
  },
  {
    title: "Community Calendar",
    description: "Containing those events open only to the SoA community.",
    image: "/ag-doc-2798-0070-pub.svg",
  },
];

export function Calendars() {
  return (
    <section className="py-16 bg-[#FFFCFB] text-[#4B4A4A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Title with Underline */}
        <h2 className="text-3xl font-times border-b-[1.5px] border-[#4B4A4A] pb-2 inline-block">
          Calendars & Newsletters
        </h2>

        {/* Grid Layout - Ensuring Alignment */}
        <div className="grid md:grid-cols-3 gap-12 mt-8 items-start">
          {calendars.map((calendar) => (
            <div key={calendar.title} className="flex flex-col items-start">
              {/* Title with Underline */}
              <h3 className="text-lg font-inter border-b-[1.5px] border-[#4B4A4A] pb-1 inline-block">
                {calendar.title}
              </h3>

              {/* Description (Fixed Height for Alignment) */}
              <p className="text-sm italic font-inter mt-1 min-h-[50px]">
                {calendar.description}
              </p>

              {/* Image (Aligned Perfectly) */}
              <div className="relative w-[333px] h-[114px] mt-4 overflow-hidden rounded-lg self-start">
                <Image
                  src={calendar.image}
                  alt={calendar.title}
                  width={333}
                  height={114}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
