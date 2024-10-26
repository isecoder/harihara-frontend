"use client";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

interface ImageData {
  image_id: number;
  alt_text: string;
  public_url: string; // Direct public URL for the image
}

export default function ImageGallery(): JSX.Element {
  const [images, setImages] = useState<ImageData[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const fetchImages = useCallback(async (currentPage: number) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:4000/api/images/batch?limit=5&page=${currentPage}`,
        { cache: "no-store" }
      );
      if (!res.ok) throw new Error("Failed to load images");

      const data = await res.json();
      console.log("Fetched data:", data); // Log the response to verify structure

      // Access the images array from data.images
      const newImages: ImageData[] = data?.data?.images || [];

      setHasMore(newImages.length > 0); // Check if there are more images to load
      setImages((prev) => [
        ...prev,
        ...newImages.filter(
          (newImage) => !prev.some((img) => img.image_id === newImage.image_id)
        ),
      ]);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchImages(1);
  }, [fetchImages]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );

    const currentLoaderRef = loaderRef.current;
    if (currentLoaderRef) observer.observe(currentLoaderRef);

    return () => {
      if (currentLoaderRef) observer.unobserve(currentLoaderRef);
    };
  }, [loading, hasMore]);

  useEffect(() => {
    if (page > 1 && hasMore) fetchImages(page);
  }, [page, hasMore, fetchImages]);

  return (
    <div className="relative">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="loader"></div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {images.map((image) => (
          <div
            key={image.image_id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="relative w-full h-48">
              <Image
                src={image.public_url} // Use public_url directly
                alt={image.alt_text || "Image"}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600">{image.alt_text}</p>
            </div>
          </div>
        ))}
        <div
          ref={loaderRef}
          className="w-full h-10 flex justify-center items-center"
        >
          {!hasMore && <p>No more images to load</p>}
        </div>
      </div>

      <style jsx>{`
        .loader {
          border: 8px solid #f3f3f3;
          border-top: 8px solid #3498db;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
