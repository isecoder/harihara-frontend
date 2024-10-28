import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface ImageData {
  image_id: number;
  alt_text: string;
  public_url: string;
}

interface ImageModalProps {
  isOpen: boolean;
  images: ImageData[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (direction: "next" | "prev") => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  const handleOverlayClick = (event: React.MouseEvent) => {
    // Close the modal when clicking on the overlay
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      onClick={handleOverlayClick}
    >
      <div className="relative max-w-3xl w-full p-4">
        <div className="relative w-full h-96">
          <Image
            src={currentImage.public_url}
            alt={currentImage.alt_text || "Image"}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Arrows positioned absolutely outside the image */}
        <div className="absolute inset-y-1/2 left-0 flex items-center justify-center transform -translate-y-1/2">
          <button
            onClick={() => onNavigate("prev")}
            disabled={currentIndex === 0}
            className={`flex items-center justify-center w-10 h-10 rounded-full ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            style={{
              backgroundColor:
                currentIndex === 0 ? "transparent" : "rgba(255, 255, 255, 0.3)",
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
          </button>
        </div>
        <div className="absolute inset-y-1/2 right-0 flex items-center justify-center transform -translate-y-1/2">
          <button
            onClick={() => onNavigate("next")}
            disabled={currentIndex === images.length - 1}
            className={`flex items-center justify-center w-10 h-10 rounded-full ${
              currentIndex === images.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            style={{
              backgroundColor:
                currentIndex === images.length - 1
                  ? "transparent"
                  : "rgba(255, 255, 255, 0.3)",
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
