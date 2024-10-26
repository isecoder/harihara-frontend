"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/sevas", label: "Sevas" },
  { href: "/donations", label: "Donations" },
  { href: "/festivals", label: "Festivals" },
  { href: "/gallery", label: "Gallery" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative w-full z-10">
      {/* Banner Image directly at the top */}
      <div className="relative w-full h-52 md:h-64">
        <Image
          src="/banner.png"
          alt="Banner"
          fill
          className="object-top"
          quality={100}
          priority
          sizes="100vw"
        />
      </div>

      {/* Navbar with more spacing between links */}
      <div className="sticky top-0 bg-gradient-to-r from-white to-orange-100 shadow-md z-20">
        <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
          {/* Desktop Links */}
          <nav className="hidden md:flex space-x-8 flex-1 justify-center">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-orange-500 font-medium text-sm md:text-base hover:text-gray-600 transition duration-200 tracking-wider"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div
            className="md:hidden cursor-pointer text-orange-500 text-xl"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-2 bg-gradient-to-r from-white to-orange-200 py-4 shadow-md text-center">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-orange-500 font-medium text-sm hover:text-gray-600 transition duration-200 tracking-wide"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
