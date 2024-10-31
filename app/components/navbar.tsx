'use client'

import { useState } from "react"
import Link from "next/link"
import { FaBars, FaTimes } from "react-icons/fa"
import { ChevronDown } from "lucide-react"
import Banner from "@/app/components/banner"

interface NavLink {
  href: string
  label: string
  subLinks?: NavLink[]
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  {
    href: "",
    label: "About",
    subLinks: [
      { href: "/history", label: "History" },
      { href: "/temple", label: "About Temple" },
      { href: "/administration", label: "Administration" },
      { href: "/how_to_reach", label: "How to Reach" },
      { href: "/nearby_places", label: "Nearby Places" },
    ],
  },
  { href: "/sevas", label: "Sevas" },
  { href: "/donations", label: "Donations" },
  { href: "/newsupdates", label: "News & Updates" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [aboutDropdownMobileOpen, setAboutDropdownMobileOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  const toggleAboutDropdown = (event: React.MouseEvent) => {
    event.preventDefault()
    setAboutDropdownOpen((prev) => !prev)
  }

  const toggleAboutDropdownMobile = (event: React.MouseEvent) => {
    event.preventDefault()
    setAboutDropdownMobileOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setMenuOpen(false)
    setAboutDropdownOpen(false)
    setAboutDropdownMobileOpen(false)
  }

  return (
    <>
      <Banner />
      <div className="sticky top-0 w-full z-10 bg-gradient-to-r from-white to-orange-100 shadow-lg">
        <div className="flex justify-end items-center mx-auto py-4 px-4 md:px-8">
          <nav className="hidden md:flex justify-center flex-1 space-x-6 text-sm">
            {navLinks.map(({ href, label, subLinks }) => (
              <div key={label} className="relative group">
                {subLinks ? (
                  <>
                    <button
                      onClick={toggleAboutDropdown}
                      className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200 focus:outline-none flex items-center"
                      aria-haspopup="true"
                      aria-expanded={aboutDropdownOpen}
                    >
                      {label}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          aboutDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-20 transition-all duration-300 ease-in-out transform origin-top ${
                        aboutDropdownOpen
                          ? "opacity-100 scale-y-100"
                          : "opacity-0 scale-y-0 pointer-events-none"
                      }`}
                    >
                      {subLinks.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          onClick={closeMenu}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={href}
                    onClick={closeMenu}
                    className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200"
                  >
                    {label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? (
              <FaTimes className="text-orange-500 text-2xl" />
            ) : (
              <FaBars className="text-orange-500 text-2xl" />
            )}
          </div>
        </div>
        <div
          className={`md:hidden flex flex-col items-center space-y-4 bg-gradient-to-r from-white to-orange-200 text-center py-6 shadow-md transition-all duration-300 ease-in-out transform origin-top ${
            menuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 h-0 overflow-hidden"
          }`}
        >
          {navLinks.map(({ href, label, subLinks }) => (
            <div key={label} className="relative w-full">
              {subLinks ? (
                <>
                  <button
                    onClick={toggleAboutDropdownMobile}
                    className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200 focus:outline-none flex items-center justify-center w-full"
                    aria-haspopup="true"
                    aria-expanded={aboutDropdownMobileOpen}
                  >
                    {label}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        aboutDropdownMobileOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`flex flex-col items-center mt-2 space-y-2 transition-all duration-300 ease-in-out ${
                      aboutDropdownMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    {subLinks.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        onClick={closeMenu}
                        className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={href}
                  onClick={closeMenu}
                  className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200 block"
                >
                  {label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="pt-4"></div>
    </>
  )
}