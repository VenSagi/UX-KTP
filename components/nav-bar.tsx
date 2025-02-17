"use client";
import Link from "next/link"
import { Search } from "lucide-react"

const menuItems = ["About SOA", "Apply", "Exhibitions", "Publications", "News", "Public Events", "Quick Links"]

export function NavBar() {
  return (
    <nav className="absolute top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-[76px]">
          {/* Logo Section: Yale on Left, School of Art Stacked on Right */}
          <Link href="/" className="flex items-center">
            <span className="text-[40px] font-times text-white leading-none">Yale</span>
            <div className="flex flex-col ml-2 leading-tight">
              <span className="text-[15px] font-times text-white tracking-wide uppercase">SCHOOL</span>
              <span className="text-[15px] font-times text-white tracking-wide uppercase">OF ART</span>
            </div>
          </Link>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link 
                key={item} 
                href="#" 
                className="text-[13px] font-times text-white tracking-wide hover:text-gray-300 transition"
              >
                {item}
              </Link>
            ))}
            {/* Search Icon */}
            <button className="p-2 text-white hover:bg-gray-700 rounded-full transition">
              <Search className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
