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
      {/* Banner Image */}
      <div className="relative w-full h-56 md:h-72">
        <Image
          src="/banner.png"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      {/* Navbar */}
      <div className="sticky top-0 bg-gradient-to-r from-white to-orange-100 shadow-lg">
        <div className="flex items-center justify-between px-4 py-4 md:px-8">
          {/* Desktop Links */}
          <nav className="hidden md:flex space-x-8 flex-1 justify-center">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-orange-500 font-medium hover:text-gray-600 transition duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div
            className="md:hidden cursor-pointer text-orange-500 text-2xl"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 bg-gradient-to-r from-white to-orange-200 py-6 shadow-md text-center">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-orange-500 font-medium hover:text-gray-600 transition duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Spacer */}
      <div className="pt-[12rem]"></div>
    </div>
  );
};

export default Navbar;
