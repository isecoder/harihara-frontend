// components/Banner.tsx
"use client";
import Image from "next/image";
import { FaOm } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Banner: React.FC = () => {
  return (
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
      <h1 className="text-3xl md:text-5xl font-bold mt-4 z-10 text-white thick-border">
        SHRI HARIHARESHWARA TEMPLE
      </h1>
      <p className="text-sm md:text-lg z-10 text-white thick-border">
        HARIHARAPALLATHADKA, SULLIA TALUK, DAKSHINA KANNADA - 574218
      </p>

      {/* Decorative Icons */}
      <div className="absolute bottom-6 flex justify-between w-full px-8 md:px-16 z-10">
        <div className="flex items-center space-x-2">
          <Image
            src="/path/to/your/icon1.png" // Replace with the actual path to the temple logo if available
            alt="Temple Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="text-xl md:text-2xl font-kannada text-white thick-border">
            ಶ್ರೀ ಹರಿಹರೇಶ್ವರ ದೇವಸ್ಥಾನ
          </span>
        </div>
        <FaOm className="text-pink-500 text-2xl md:text-3xl" />
      </div>

      {/* Bottom Decorative Border */}
      <div className="absolute bottom-0 w-full h-3 bg-green-700"></div>

      <style jsx>{`
        .thick-border {
          text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,
            -2px 2px 0 #000;
        }
      `}</style>
    </div>
  );
};

export default Banner;
