"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaOm } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

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
      {/* Banner */}
      <div className="relative w-full h-52 md:h-64 bg-orange-500 text-white flex flex-col items-center justify-center text-center p-4 overflow-hidden">
        {/* Top Decorative Border */}
        <div className="absolute top-0 w-full h-3 bg-green-700"></div>

        {/* Background Patterns */}
        <div className="absolute inset-0 bg-orange-500 opacity-90">
          <div className="absolute left-4 top-10 w-24 h-24 rounded-full bg-orange-400 opacity-50"></div>
          <div className="absolute right-4 top-10 w-24 h-24 rounded-full bg-orange-400 opacity-50"></div>
          <div className="absolute left-4 bottom-10 w-32 h-32 rounded-full bg-orange-600 opacity-40"></div>
          <div className="absolute right-4 bottom-10 w-32 h-32 rounded-full bg-orange-600 opacity-40"></div>
        </div>

        {/* Government Badges */}
        <div className="flex justify-between items-center w-full px-6 md:px-12 z-10">
          <div className="flex items-center space-x-2 text-white text-sm bg-orange-600 px-3 py-1 rounded-full shadow-md">
            <AiOutlineStar className="text-lg" />
            <span>Government of Karnataka</span>
          </div>
          <div className="flex items-center space-x-2 text-white text-sm bg-orange-600 px-3 py-1 rounded-full shadow-md">
            <span>
              Hindu Religious Institutions & Charitable Endowments Department
            </span>
            <AiOutlineStar className="text-lg" />
          </div>
        </div>

        {/* Main Banner Text */}
        <h1 className="text-3xl md:text-5xl font-bold mt-4 z-10">
          SHRI HARIHARESHWARA TEMPLE
        </h1>
        <p className="text-sm md:text-lg z-10">
          HARIHARAPALLATHADKA, SULLIA TALUK, DAKSHINA KANNADA - 574218
        </p>

        {/* Decorative Icons */}
        <div className="absolute bottom-6 flex justify-between w-full px-8 md:px-16 z-10">
          <div className="flex items-center space-x-2">
            <Image
              src="/path/to/your/icon1.png" // Replace with the actual path to the temple logo if available
              alt="Temple Logo"
              width={48} // Set width to desired size in pixels
              height={48} // Set height to desired size in pixels
              className="rounded-full"
            />
            <span className="text-xl md:text-2xl font-kannada">
              ಶ್ರೀ ಹರಿಹರೇಶ್ವರ ದೇವಸ್ಥಾನ
            </span>
          </div>
          <FaOm className="text-pink-500 text-2xl md:text-3xl" />
        </div>

        {/* Bottom Decorative Border */}
        <div className="absolute bottom-0 w-full h-3 bg-green-700"></div>
      </div>

      {/* Navbar Container */}
      <div className="sticky top-0 w-full z-10 bg-gradient-to-r from-white to-orange-100 shadow-lg">
        <div className="flex justify-end items-center mx-auto py-4 px-4 md:px-8">
          {/* Navbar Links - Visible on Large Screens */}
          <nav className="hidden md:flex justify-center flex-1 space-x-8">
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
