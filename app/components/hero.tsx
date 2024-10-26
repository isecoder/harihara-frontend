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

  // Helper function to handle slide transition with delay
  const transitionSlide = useCallback((nextPage: number) => {
    setCurrentPage(nextPage);
  }, []);

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
    <div className="relative flex flex-col w-full bg-gradient-to-b from-white to-orange-200">
      <div className="relative w-screen h-[500px] md:h-[620px] overflow-hidden">
        <Image
          src={images[currentPage]}
          alt={`Image ${currentPage + 1}`}
          fill
          sizes="100vw"
          className="object-center w-full h-full"
          priority
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
              onClick={() => transitionSlide(index)}
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
