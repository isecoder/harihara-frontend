import Image from "next/image";
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-50 backdrop-blur-sm z-50">
      <div className="w-22 h-22">
        <Image
          src="/om1.png"
          alt="Loading..."
          width={88} // Set an appropriate width
          height={88} // Set an appropriate height
          className="animate-spin"
          priority // Ensures the image loads as quickly as possible
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
