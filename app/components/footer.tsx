"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <div className="relative">
      {/* <Image
        src="/?height=600&width=1200"
        alt="Temple Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      /> */}
      <footer className="relative z-10 bg-gradient-to-r from-orange-500/90 to-orange-300/90 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logo.jpg?height=96&width=96"
              alt="Temple Logo"
              width={96}
              height={96}
              className="rounded-full mb-4"
            />
            <p className="text-xl font-bold mb-4">ಶ್ರೀ ಹರಿಹರೇಶ್ವರ ದೇವಸ್ಥಾನ</p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/shreeharihareshwara"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6 text-white hover:text-blue-400 transition-colors duration-200" />
              </Link>
              <Link
                href="https://www.instagram.com/shreeharihareshwara"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 text-white hover:text-pink-400 transition-colors duration-200" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">≡ Quick Links</h3>
            <ul className="space-y-2">
              {["History", "News", "Seva List", "Gallery"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-yellow-300 transition-colors duration-200 flex items-center"
                  >
                    <span className="mr-2">►</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <span className="mr-2">🛈</span>Address
            </h3>
            <address className="not-italic">
              <p>Shri Harihareshwara Temple,</p>
              <p>Hariharapallathadka Post and Village,</p>
              <p>Sullia Taluk, Dakshina Kannada</p>
              <p>PIN - 574218</p>
              <div className="flex items-center mt-2">
                <Phone className="w-4 h-4 mr-2" />
                <p>9448116685</p>
              </div>
              <div className="flex items-center mt-2">
                <Mail className="w-4 h-4 mr-2" />
                <a
                  href="mailto:shriharihareshwara@gmail.com"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  shriharihareshwara@gmail.com
                </a>
              </div>
            </address>
          </div>

          <div className="w-full h-48 md:h-full">
            <iframe
              title="Temple Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16007.58945343131!2d75.5966208264565!3d12.621718820076161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4e497c13f1aa5%3A0x5592ade3cc59cc91!2s!5e1!3m2!1sen!2sin!4v1730022730983!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="rounded-md shadow-lg"
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </footer>
      <div className="relative z-10 bg-orange-800 text-white py-2 text-center text-sm">
        <p>
          © 2021-2024 | Disclaimer -{" "}
          <Link
            href="/policy"
            className="hover:text-yellow-400 hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link
            href="/policy"
            className="hover:text-yellow-400 hover:underline"
          >
            Refund & Cancellation
          </Link>{" "}
          | Harihareshwara Temple HariharaPallathadka. All Rights Reserved
        </p>
        <p>
          Designed by:{" "}
          <Link
            href="https://www.instagram.com/iscoderz/"
            className="hover:text-yellow-400 hover:underline"
          >
            ISECODERZ
          </Link>
        </p>
      </div>
    </div>
  );
}
