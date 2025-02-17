import Image from "next/image"

const posts = [
  {
    title: "FROM OUR FRIENDS AT THE YALE CENTER FOR ENVIRONMENTAL JUSTICE",
    image: "/community-bulletin1.png",
    description:
      'The Yale Center for Environmental Justice is in the process of preparing our fourth annual Global Environmental Justice Conference, with this year focusing on the theme of "Environmental Joy." The conference aims to explore the ways in which environmental and climate justice and the communities engaged in that work generate joy.',
  },
  {
    title: "FACULTY/ALUMNI: POST YOUR ART APPRENTICESHIP/ INTERNSHIP OPPORTUNITIES FOR UNDERGRADUATES",
    image: "/community-bulletin2.png",
    description:
      "The Yale Arts Apprenticeship Program is an initiative that connects Yale undergraduates, particularly those on financial aid, with professional arts practitioners of any discipline. As an option within Yale's Summer Experience Award (SEA) funding model, the Arts Apprenticeship must fulfill the same basic requirements.",
  },
]

export function CommunityBoard() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-playfair mb-12">Community Bulletin Board</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {posts.map((post) => (
            <div key={post.title} className="group cursor-pointer">
              {/* Increased height and flexbox for positioning */}
              <div
                className="relative h-[600px] mb-6 overflow-hidden bg-cover bg-center flex flex-col justify-end"
                style={{
                  backgroundImage: `url(${post.image || "/placeholder.svg"})`,
                }}
              >
                {/* Add overlay to make the text readable */}
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 p-6">
                  <h3 className="text-lg font-medium text-white mb-4">{post.title}</h3>
                  <p className="text-white text-sm leading-relaxed">{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
