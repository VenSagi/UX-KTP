import Image from "next/image"

const posts = [
  {
    title: "FROM OUR FRIENDS AT THE YALE CENTER FOR ENVIRONMENTAL JUSTICE",
    image: "/group2.svg", // Updated with correct file name
    description:
      "The Yale Center for Environmental Justice is in the process of preparing our fourth annual Global Environmental Justice Conference, with this year focusing on the theme of 'Environmental Joy.' The conference aims to explore the ways in which environmental and climate justice and the communities engaged in that work generate joy.",
  },
  {
    title: "FACULTY/ALUMNI: POST YOUR ART APPRENTICESHIP/INTERNSHIP OPPORTUNITIES FOR UNDERGRADUATES",
    image: "/ag-doc-2356-0017-pub.svg", // Updated with correct file name
    description:
      "The Yale Arts Apprenticeship Program is an initiative that connects Yale undergraduates, particularly those on financial aid, with professional arts practitioners of any discipline. As an option within Yale's Summer Experience Award (SEA) funding model, the Arts Apprenticeship must fulfill the same basic requirements.",
  },
];

export function CommunityBoard() {
  return (
    <section className="py-16 bg-[#FFFCFB] text-[#4B4A4A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Title */}
        <h2 className="text-3xl font-times font-bold border-b border-black pb-2 inline-block">
          Community Bulletin Board
        </h2>

{/* Grid Layout (Updated to Match 620x613 px) */}
<div className="grid md:grid-cols-2 gap-8 mt-8">
  {posts.map((post) => (
    <div key={post.title} className="group cursor-pointer relative w-[620px] h-[613px]">
      {/* Image Wrapper */}
      <div className="relative w-full h-[450px] overflow-hidden rounded-lg">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay Text */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-6">
        <h3 className="text-lg font-bold leading-tight">{post.title}</h3>
        <p className="text-sm mt-2">{post.description}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
