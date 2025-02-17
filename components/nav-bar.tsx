import Link from "next/link"
import { Search } from "lucide-react"

const menuItems = ["About SOA", "Apply", "Exhibitions", "Publications", "News", "Public Events", "Quick Links"]

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-transparent border-b-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="font-playfair text-xl font-bold text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
              Yale
            </span>
            <span className="ml-2 text-sm uppercase text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
              School of Art
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link key={item} href="#" className="text-sm text-white hover:text-gray-300" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                {item}
              </Link>
            ))}
            <button className="p-2 rounded-full">
              <Search className="h-5 w-5 text-white drop-shadow-lg" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
