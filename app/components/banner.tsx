import React from "react";
import Image from "next/image"; // Import the Image component from next/image

const Banner = () => {
  return (
    <div className="bg-gradient-to-br from-orange-300 to-orange-500 text-white py-12 px-4 md:px-8 lg:px-16 relative">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-4 relative">
        {/* Left Logo - Temple Logo for Large Screens */}
        <div className="hidden md:block absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2">
          <Image
            src="/logo.jpg" // Use the actual path to the temple logo
            alt="Temple Logo"
            width={100} // Set width for optimization
            height={100} // Set height for optimization
            className="h-16 md:h-20 lg:h-24 w-auto rounded-full"
          />
        </div>

        {/* Logo for Small Screens */}
        <div className="md:hidden flex flex-col items-center">
          <Image
            src="/logo.jpg" // Use the actual path to the temple logo
            alt="Temple Logo"
            width={150} // Set width for optimization
            height={150} // Set height for optimization
            className="h-24 w-auto rounded-full" // Larger size for small screens
          />
        </div>

        
         {/* Center Section - Department Text, Title, and Address */}
        <div className="text-center flex flex-col items-center">
          <div className="bg-orange-300 text-black rounded-full py-1 px-4 text-xs md:text-sm mb-2">
            Hindu Religious Institutions & Charitable Endowments Department
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
            SHRI HARIHARESHWARA TEMPLE
          </h1>
          <p className="text-xs md:text-lg mt-2">
            HARIHARAPALLATHADKA, SULLIA TALUK, DAKSHINA KANNADA - 574218
          </p>
        </div>

        {/* Right Logo - Government Logo for Large Screens */}
        <div className="hidden md:block absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2">
          <Image
            src="/government.png" // Use the actual path to the government logo
            alt="Government Logo"
            width={100} // Set width for optimization
            height={100} // Set height for optimization
            className="h-16 md:h-20 lg:h-24 w-auto"
          />
        </div>

        {/* Government Logo for Small Screens */}
        <div className="md:hidden flex flex-col items-center mt-4">
          <Image
            src="/government.png" // Use the actual path to the government logo
            alt="Government Logo"
            width={150} // Set width for optimization
            height={150} // Set height for optimization
            className="h-24 w-auto rounded-full" // Larger size for small screens
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

