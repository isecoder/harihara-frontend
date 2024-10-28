import React from "react";
import Image from "next/image";

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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative max-w-3xl w-full p-4">
        <button onClick={onClose} className="absolute top-2 right-2 text-white">
          ✖️
        </button>
        <div className="relative w-full h-96">
          <Image
            src={currentImage.public_url}
            alt={currentImage.alt_text || "Image"}
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={() => onNavigate("prev")}
            disabled={currentIndex === 0}
            className={`bg-white text-black px-4 py-2 rounded ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Previous
          </button>
          <button
            onClick={() => onNavigate("next")}
            disabled={currentIndex === images.length - 1}
            className={`bg-white text-black px-4 py-2 rounded ${
              currentIndex === images.length - 1
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
