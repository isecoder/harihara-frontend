"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import Banner from "@/app/components/banner";
import LanguageSwitcher from "@/app/components/LanguageSwitcher"; // Import your LanguageSwitcher component

interface NavLink {
  href: string;
  label: string;
  subLinks?: NavLink[];
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
  { href: "/contact", label: "Contact" },
  { href: "/sevas", label: "Sevas" },
  { href: "/donations", label: "Donations" },
  { href: "/festivals", label: "Festivals" },
  { href: "/gallery", label: "Gallery" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState<boolean>(false); // For desktop view
  const [aboutDropdownMobileOpen, setAboutDropdownMobileOpen] =
    useState<boolean>(false); // For mobile view
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false); // State for language dropdown

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const toggleAboutDropdown = (event: React.MouseEvent) => {
    event.preventDefault();
    setAboutDropdownOpen((prev) => !prev);
  };

  const toggleAboutDropdownMobile = (event: React.MouseEvent) => {
    event.preventDefault();
    setAboutDropdownMobileOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setAboutDropdownOpen(false);
    setAboutDropdownMobileOpen(false);
    setDropdownOpen(false); // Close language dropdown
  };

  return (
    <>
      <Banner />

      {/* Navbar Container */}
      <div className="sticky top-0 w-full z-10 bg-gradient-to-r from-white to-orange-100 shadow-lg">
        <div className="flex justify-end items-center mx-auto py-4 px-4 md:px-8">
          <nav className="hidden md:flex justify-center flex-1 space-x-6 text-sm">
            {navLinks.map(({ href, label, subLinks }) => (
              <div key={label} className="relative">
                {subLinks ? (
                  <>
                    <button
                      onClick={toggleAboutDropdown}
                      className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200 focus:outline-none"
                    >
                      {label}
                    </button>
                    {aboutDropdownOpen && (
                      <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-20">
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
                    )}
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

          {/* Language Switcher Dropdown */}
          <div className="relative hidden md:flex items-center">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)} // Toggle dropdown
              className="flex items-center text-orange-500 font-medium hover:text-gray-600 transition-all duration-200"
            >
              Languages <FaCaretDown className="ml-1" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gradient-to-r from-orange-100 to-orange-200 shadow-lg rounded-md z-10">
                <LanguageSwitcher onSelect={closeMenu} />{" "}
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
          <div className="md:hidden flex flex-col items-center space-y-4 bg-gradient-to-r from-white to-orange-200 text-center py-6 shadow-md transition-all duration-200 z-20">
            {navLinks.map(({ href, label, subLinks }) => (
              <div key={label} className="relative">
                {subLinks ? (
                  <>
                    <button
                      onClick={toggleAboutDropdownMobile}
                      className="text-orange-500 font-medium hover:text-gray-600 transition-all duration-200 focus:outline-none"
                    >
                      {label}
                    </button>
                    {aboutDropdownMobileOpen && (
                      <div className="flex flex-col items-center mt-2 space-y-2">
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
                    )}
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
            <LanguageSwitcher onSelect={closeMenu} />{" "}
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
