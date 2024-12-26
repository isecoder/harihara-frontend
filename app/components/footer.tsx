"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { FaLink, FaMapMarkerAlt } from "react-icons/fa";

// Define types for locales
type LocaleType = "en" | "kn";

// Define text content for each language
const footerText: Record<LocaleType, { 
  templeName: string; 
  quickLinks: { title: string; links: { name: string; path: string }[] }; 
  addressTitle: string; 
  address: string[]; 
  contactNumbers: string; 
  email: string; 
  privacyPolicy: string; 
  refundPolicy: string; 
  admin: string; 
  rightsReserved: string; 
  designedBy: string; 
  designerName: string; 
}> = {
  en: {
    templeName: "Shri Harihareshwara Temple",
    quickLinks: {
      title: "Quick Links",
      links: [
        { name: "History", path: "/history" },
        { name: "News", path: "/newsupdates" },
        { name: "Sevas", path: "/sevas" },
        { name: "Gallery", path: "/gallery" }
      ]
    },
    addressTitle: "Address",
    address: [
      "Shri Harihareshwara Temple,",
      "Hariharapallathadka Post and Village,",
      "Sullia Taluk, Dakshina Kannada",
      "PIN - 574218"
    ],
    contactNumbers: "08257-283366, 8073030594",
    email: "shriharihareshwara@gmail.com",
    privacyPolicy: "Privacy Policy",
    refundPolicy: "Refund & Cancellation",
    admin: "Admin",
    rightsReserved: "Shri Harihareshwara Temple, Hariharapallathadka. All Rights Reserved",
    designedBy: "Designed:",
    designerName: "ISCODERZ"
  },
  kn: {
    templeName: "ಶ್ರೀ ಹರಿಹರೇಶ್ವರ ದೇವಸ್ಥಾನ",
    quickLinks: {
      title: "ಲಿಂಕ್ಸ್",
      links: [// ದೇವಾಲಯದ ಬಗ್ಗೆ ಇತಿಹಾಸ
        { name: "ದೇವಸ್ಥಾನದ ಬಗ್ಗೆ", path: "/history" },
        { name: "ಸುದ್ದಿಗಳು", path: "/newsupdates" },
        { name: "ಸೇವೆಗಳು", path: "/sevas" },
        { name: "ಗ್ಯಾಲರಿ", path: "/gallery" }
      ]
    },
    addressTitle: "ವಿಳಾಸ",
    address: [
      "ಶ್ರೀ ಹರಿಹರೇಶ್ವರ ದೇವಸ್ಥಾನ,",
      "ಹರಿಹರಪಲ್ಲತಡ್ಕ ಅಂಚೆ ಮತ್ತು ಗ್ರಾಮ,",
      "ಸುಳ್ಯ ತಾಲೂಕು, ದ.ಕ.",
      "ಪಿನ್ - 574218"
    ],
    contactNumbers: "08257-283366, 8073030594",
    email: "shriharihareshwara@gmail.com",
    privacyPolicy: "ಗೌಪ್ಯತಾ ನೀತಿ",
    refundPolicy: " ಮರುಪಾವತಿ ಮತ್ತು ರದ್ದುಪಡಿಸುವಿಕೆ",
    admin: " ಅಡ್ಮಿನ್",
    rightsReserved: "ಶ್ರೀ ಹರಿಹರೇಶ್ವರ ದೇವಸ್ಥಾನ, ಹರಿಹರಪಲ್ಲತಡ್ಕ | ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ",
    designedBy: "ಹೋಸ್ಟಿಂಗ್ ಮತ್ತು ನಿರ್ವಹಣೆ:",
    designerName: "ಐಎಸ್ ಕೋಡರ್ಸ್"
  }
};

const Footer: React.FC = () => {
  const currentLocale: LocaleType = useSelector((state: RootState) => state.locale.locale) as LocaleType;
  const text = footerText[currentLocale];

  return (
    <div className="flex flex-col ">
      <footer className="bg-gradient-to-r from-orange-500 to-orange-300 text-white py-10 px-10 md:px-10 lg:px-10 mt-[6rem] flex-grow">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between lg:items-center">
          {/* Logo and Title Section */}
          <div className="flex flex-col items-center lg:items-center mb-8 lg:mb-0">
            <div className="mb-8">
              <Image
                src="/logo.jpg"
                alt="Temple Logo"
                width={96}
                height={96}
                className="rounded-full"
                priority
              />
            </div>
            <p className="text-xl font-bold">{text.templeName}</p>

            {/* Social Media Icons */}
            <div className="flex space-x-8 mt-6">
              <a href="https://www.facebook.com/shreeharihareshwara" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-blue-500 transition-colors duration-200">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/shreeharihareshwara" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-blue-400 transition-colors duration-200">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Section with Icon */}
          <div className="text-left lg:text-center mb-6 lg:mb-0">
            <h3 className="text-lg font-semibold mb-6 flex items-center space-x-2">
              <FaLink className="w-5 h-5" /> <span>{text.quickLinks.title}</span>
            </h3>
            <ul className="space-y-1">
              {text.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="hover:underline hover:text-yellow-300 flex items-center">
                    <span className="inline-block w-4">
                      <span className="text-xs leading-4">►</span>
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Address Section with Icon */}
          <div className="text-left lg:text-left mb-4">
            <h3 className="text-lg font-semibold mb-2 mt-10 flex items-center space-x-2">
              <FaMapMarkerAlt className="w-5 h-5" /> <span>{text.addressTitle}</span>
            </h3>
            <address>
              {text.address.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
              <div className="flex items-center space-x-2">
              <svg
                  width="15px"
                  height="15px"
                  className="mt-1.5"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="white"
                    d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"
                  ></path>
                </svg><p className="mt-0.5">{text.contactNumbers}</p>
              </div>
              <div className="flex items-center space-x-2">
              <svg
                  width="15px"
                  height="15px"
                  className="mt-1.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2l-8 5-8-5V6l8 5 8-5v2zM4 18v-8l8 5 8-5v8H4z" />
                </svg><p className="mt-0.5">{text.email}</p>
              </div>
            </address>
          </div>

          {/* Map Section */}
          <div className="flex justify-center lg:justify-end w-full lg:w-auto">
            <iframe
              title="Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16007.58945343131!2d75.5966208264565!3d12.621718820076161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4e497c13f1aa5%3A0x5592ade3cc59cc91!2s!5e1!3m2!1sen!2sin!4v1730022730983!5m2!1sen!2sin"
              width="400"
              height="200"
              className="rounded-md shadow-lg"
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </footer>

      {/* Footer Bottom Section */}
      <div className="bg-black text-white py-2 text-center site-footer-bottom mx-0 mb-0">
        <p>
          © 2024 | Disclaimer - <Link href="/policy" className="text-yellow-400 hover:underline">{text.privacyPolicy}</Link> | 
          <Link href="/policy" className="text-yellow-400 hover:underline">{text.refundPolicy}</Link> |
          <Link href="/admin" className="text-yellow-400 hover:underline">{text.admin}</Link> | {text.rightsReserved}
        </p>
        <p>{text.designedBy} <Link href="https://www.instagram.com/iscoderz/" className="text-yellow-400 hover:underline">{text.designerName}</Link></p>
      </div>
    </div>
  );
};

export default Footer;
