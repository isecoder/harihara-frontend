"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const images: string[] = [
  "/temple2.png",
  "/temple3.jpg",
  "/temple4.png",
  "/temple5.png",
];

const ImageSlider: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Helper function to handle slide transition with delay
  const transitionSlide = useCallback(
    (nextPage: number) => {
      if (isAnimating) return; // Prevent rapid clicking
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500); // Animation delay
      setCurrentPage(nextPage);
    },
    [isAnimating]
  );

  // Auto transition every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      transitionSlide((currentPage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentPage, transitionSlide]);

  const handlePrevPage = () =>
    transitionSlide((currentPage - 1 + images.length) % images.length);
  const handleNextPage = () =>
    transitionSlide((currentPage + 1) % images.length);

  return (
    <div className="relative flex flex-col items-center w-full max-w-xl mx-auto bg-gradient-to-b from-white to-orange-200">
      <div className="relative w-full h-72 md:h-80 overflow-hidden">
        <div
          className={`transition-transform duration-500 ease-in-out ${
            isAnimating ? "transform scale-95" : ""
          }`}
        >
          <Image
            src={images[currentPage]}
            alt={`Image ${currentPage + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            className="object-contain w-full h-full"
            priority
          />
        </div>

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
              onClick={() => transitionSlide(index)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
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
