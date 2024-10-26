"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Array of image paths
const images = [
  "/temple5.png",  // Ensure these paths are correct
  "/temple2.png",
  "/temple3.jpg",
  "/temple4.png"
];

const ImageSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextPage();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevPage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPage((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNextPage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPage((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPage(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="relative flex flex-col w-full bg-gradient-to-b from-white to-orange-200">
      {/* Image container */}
      <div className="relative w-screen h-[500px] md:h-[620px] overflow-hidden">
        <Image
          className="w-full h-full object-center"  // Ensures full coverage of image in container
          sizes="100vw"
          fill
          alt={`Image ${currentPage + 1}`}
          src={images[currentPage]}
          priority={true}
        />

        {/* Left arrow */}
        <div
          onClick={handlePrevPage}
          className="absolute inset-y-1/2 left-4 text-white text-2xl font-semibold cursor-pointer hover:text-orange-500"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>

        {/* Right arrow */}
        <div
          onClick={handleNextPage}
          className="absolute inset-y-1/2 right-4 text-white text-2xl font-semibold cursor-pointer hover:text-orange-500"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </div>

        {/* Dots navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentPage ? "bg-orange-500" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
