"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { changeLocale } from "../store/localeSlice";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa"; // Import dropdown icon

const languages = [
  { code: "kn" as const, label: "Top Kannada" },
  { code: "en" as const, label: "Down English" },
];

export default function LanguageSwitcher({
  onSelect,
}: {
  onSelect: () => void;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const locale = useSelector((state: RootState) => state.locale.locale);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false); // State for dropdown menu

  const handleLocaleChange = (newLocale: "en" | "kn") => {
    dispatch(changeLocale(newLocale));
    setDropdownOpen(false); // Close dropdown menu after selection
    onSelect(); // Call the function to close the dropdown in the Navbar
  };

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen((prev) => !prev)} // Toggle dropdown
        className="flex items-center text-orange-500 font-medium hover:text-gray-600"
      >
        Language <FaCaretDown className="ml-1" />
      </button>
      {dropdownOpen && ( // Show dropdown if it's open
        <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-10">
          {languages.map(({ code, label }) => (
            <li key={code} className="hover:bg-gray-100">
              <button
                onClick={() => handleLocaleChange(code)} // Change locale on selection
                className="block w-full text-left px-4 py-2 text-gray-700"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-2 text-sm">Current Locale: {locale}</p>{" "}
      {/* Display current locale */}
    </div>
  );
}
