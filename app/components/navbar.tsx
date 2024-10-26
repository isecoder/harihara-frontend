// components/Navbar.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Banner from "./banner"; // Import the Banner component

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/sevas", label: "Sevas" },
  { href: "/donations", label: "Donations" },
  { href: "/festivals", label: "Festivals" },
  { href: "/gallery", label: "Gallery" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Banner /> {/* Render the Banner component here */}
      {/* Navbar Container */}
      <div className="sticky top-0 w-full z-10 bg-gradient-to-r from-white to-orange-100 shadow-lg">
        <div className="flex justify-end items-center mx-auto py-4 px-4 md:px-8">
          {/* Navbar Links - Visible on Large Screens */}
          <nav className="hidden md:flex justify-center flex-1 space-x-8 text-sm">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Hamburger Icon - Visible on Small and Medium Screens */}
          <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? (
              <FaTimes className="text-orange-500 text-2xl" />
            ) : (
              <FaBars className="text-orange-500 text-2xl" />
            )}
          </div>
        </div>

        {/* Dropdown Menu for Small and Medium Screens */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 bg-gradient-to-r from-white to-orange-200 text-center py-6 shadow-md">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
      {/* Spacer to prevent content from being hidden behind navbar */}
      <div className="pt-4"></div>
    </>
  );
};

export default Navbar;
