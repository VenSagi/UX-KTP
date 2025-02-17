import Image from "next/image"

const posts = [
  {
    title: "FROM OUR FRIENDS AT THE YALE CENTER FOR ENVIRONMENTAL JUSTICE",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='300' viewBox='0 0 500 300'%3E%3Crect width='500' height='300' fill='%23f5f5f5'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='18' fill='%23666'%3EEnvironmental Justice Conference%3C/text%3E%3Cpath d='M200 100 C250 50, 350 50, 400 100' stroke='%23999' stroke-width='2' fill='none'/%3E%3C/svg%3E",
    description:
      'The Yale Center for Environmental Justice is in the process of preparing our fourth annual Global Environmental Justice Conference, with this year focusing on the theme of "Environmental Joy." The conference aims to explore the ways in which environmental and climate justice and the communities engaged in that work generate joy.',
  },
  {
    title: "FACULTY/ALUMNI: POST YOUR ART APPRENTICESHIP/INTERNSHIP OPPORTUNITIES FOR UNDERGRADUATES",
    image:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='300' viewBox='0 0 500 300'%3E%3Crect width='500' height='300' fill='%23f5f5f5'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='sans-serif' font-size='18' fill='%23666'%3EArt Apprenticeship Program%3C/text%3E%3Crect x='150' y='120' width='200' height='60' stroke='%23999' stroke-width='2' fill='none'/%3E%3C/svg%3E",
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
              <div className="relative h-64 mb-6 overflow-hidden bg-gray-100">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium mb-4">{post.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

