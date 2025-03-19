"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import LoadingSpinner from "../components/LoadingSpinner";
import ImageModal from "../components/ImageModal";

interface GalleryImage {
  image_id: number;
  alt_text: string;
  file_path: string;
  public_url: string;
}

interface GalleryItem {
  gallery_id: number;
  title: string;
  image_id: number; // Add this
  Images: GalleryImage;
}

interface GalleryResponse {
  statusCode: number;
  message: string;
  data: GalleryItem[];
}

interface ImageData {
  image_id: number;
  alt_text: string;
  public_url: string;
  title: string;
}

export default function Gallery(): JSX.Element {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hardcoded YouTube videos
  const videos = [
    {
      title:
        "ಹರಿಹರ ಜಾತ್ರೆ 2024 |ಶ್ರೀ ಹರಿಹರೇಶ್ವರ ದೇವರ ನೃತ್ಯ ಬಲಿ| |Thidambu Nritham| |Shri Harihareshwara Temple|",
      video_url:
        "https://www.youtube.com/embed/nKGWrYaBm9o?si=Y5xDuv4J1BbYASpH",
    },
    {
      title:
        "Shri Harihareshwara Temple, Harihara | ಪ್ರತಿಷ್ಠಾ ವಾರ್ಷಿಕೋತ್ಸವ ಮತ್ತು ಜಾತ್ರೋತ್ಸವ | LIVE",
      video_url:
        "https://www.youtube.com/embed/aDmwh0ujr6Y?si=bdSh9OP6wXuF_shs",
    },
  ];

  const fetchGalleryData = async (): Promise<void> => {
    setLoading(true);
    try {
      const res = await fetch(`/api/h1/gallery`, { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch gallery data");
      const data: GalleryResponse = await res.json();

      const newImages: ImageData[] = data.data.map((galleryItem) => ({
        image_id: galleryItem.Images?.image_id || galleryItem.image_id,
        alt_text: galleryItem.Images?.alt_text || "No description available",
        public_url: galleryItem.Images?.public_url || "",
        title: galleryItem.title,
      }));

      setImages(newImages);
    } catch (error) {
      console.error(error);
      Swal.fire({
        text: "Failed to load gallery data. Please try again.",
        icon: "error",
        confirmButtonText: "Retry",
      }).then(() => location.reload());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleryData();
  }, []);

  const openImageModal = (index: number) => {
    setCurrentIndex(index);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  const navigateImage = (direction: "next" | "prev") => {
    if (direction === "next" && currentIndex < images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (direction === "prev" && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="relative px-4 md:px-8 lg:px-16 mb-10 bg-yellow-100">
      {loading && <LoadingSpinner />}

      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold text-green-800">
         Shri Harihareshwara Temple
        </h1>
      </div>

      <h2 className="text-xl font-semibold mb-4 text-green-700">PHOTOS</h2>
      {images.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={image.image_id}
              className="relative w-full h-48 cursor-pointer overflow-hidden group bg-white rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
              onClick={() => openImageModal(index)}
            >
              <Image
                src={image.public_url}
                alt={image.alt_text}
                fill
                loading="lazy"
                className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg">
                <p className="text-white text-lg font-semibold">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 text-lg">
          No images found. Please check back later.
        </div>
      )}

      <ImageModal
        isOpen={isImageModalOpen}
        images={images}
        currentIndex={currentIndex}
        onClose={closeImageModal}
        onNavigate={navigateImage}
      />

      <h2 className="text-xl font-semibold mt-10 mb-4">VIDEOS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {videos.map((video, index) => (
          <div key={index} className="w-full h-64">
            <iframe
              src={video.video_url}
              title={video.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
