import Link from "next/link"

const footerLinks = ["© Yale School of Art", "Support The School", "Visiting", "Contact", "Accessibility"]

export function Footer() {
  return (
    <footer className="bg-[#00356B] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-start">
          <div className="mb-8">
            <span className="font-playfair text-2xl font-bold">Yale</span>
            <span className="ml-2 text-sm uppercase">School of Art</span>
          </div>

          <address className="text-sm mb-8 not-italic">
            1156 Chapel Street, POB 208339
            <br />
            New Haven, Connecticut
            <br />
            06520-8339
          </address>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {footerLinks.map((link) => (
              <Link key={link} href="#" className="hover:underline">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

