import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1E3866] font-times text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-start flex-wrap">
          {/* Left Section: Logo & Address */}
          <div>
            {/* Yale Logo */}
            <div className="flex items-start">
              <span className="text-[32px] font-times leading-none">Yale</span>
              <div className="flex flex-col ml-2 leading-tight">
                <span className="text-[14px] font-times tracking-wide uppercase">
                  SCHOOL
                </span>
                <span className="text-[14px] font-times tracking-wide uppercase">
                  OF ART
                </span>
              </div>
            </div>

            {/* Address */}
            <address className="text-sm mt-4 not-italic leading-relaxed">
              1156 Chapel Street, POB 208339
              <br />
              New Haven, Connecticut, 06520-8339
            </address>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4 text-sm">
              <Link href="#" className="hover:underline">
                Instagram
              </Link>
              <Link href="#" className="hover:underline">
                Facebook
              </Link>
              <Link href="#" className="hover:underline">
                Youtube
              </Link>
            </div>
          </div>

          {/* Right Section: Bigger & Centered Navigation */}
          <div className="flex space-x-10 text-base font-times md:justify-center w-full md:w-auto mt-6 md:mt-0">
            <Link href="#" className="hover:underline">
              Support The School
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Visiting
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Contact
            </Link>
            <span>|</span>
            <Link href="#" className="hover:underline">
              Sitemap
            </Link>
          </div>
        </div>

        {/* Bottom Section with Line Only Between Yale & Accessibility */}
        <div className="text-xs font-times mt-6 flex justify-between items-center">
          <span>© Yale School of Art 2025</span>
          <span className="w-px h-4 bg-white mx-4"></span>
          <Link href="#" className="hover:underline">
            Accessibility at Yale
          </Link>
        </div>
      </div>
    </footer>
  );
}
