"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import Banner from "./banner"; // Import the Banner component
import LanguageSwitcher from "./LanguageSwitcher"; // Import the LanguageSwitcher component

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
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false); // State for dropdown menu

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false); // Close the dropdown
  };

  return (
    <>
      <Banner /> {/* Render the Banner component here */}
      {/* Navbar Container */}
      <div className="sticky top-0 w-full z-10 bg-gradient-to-r from-white to-orange-100 shadow-lg text-center">
        <div className="flex justify-between items-center mx-auto py-4 px-4 md:px-8">
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

          {/* Language Switcher - Dropdown Menu */}
          <div className="relative hidden md:flex items-center">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)} // Toggle dropdown
              className="flex items-center text-orange-500 font-medium hover:text-gray-600 transition-all duration-200"
            >
              Language <FaCaretDown className="ml-1" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-10">
                <LanguageSwitcher onSelect={closeDropdown} />{" "}
                {/* Include LanguageSwitcher component */}
              </div>
            )}
          </div>

          {/* Hamburger Icon - Visible on Small and Medium Screens */}
          <div
            className="md:hidden cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FaTimes className="text-orange-500 text-2xl" />
            ) : (
              <FaBars className="text-orange-500 text-2xl" />
            )}
          </div>
        </div>

        {/* Dropdown Menu for Small and Medium Screens */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 bg-gradient-to-r from-white to-orange-200 text-center py-6 shadow-md transition-all duration-200">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200"
              >
                {label}
              </Link>
            ))}
            <LanguageSwitcher onSelect={closeDropdown} />{" "}
            {/* Include LanguageSwitcher for small screens */}
          </div>
        )}
      </div>
      {/* Spacer to prevent content from being hidden behind navbar */}
      <div className="pt-4"></div>
    </>
  );
};

export default Navbar;
