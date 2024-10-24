import Image from "next/image";

// Define the structure of your image data
interface ImageData {
  image_id: number;
  alt_text: string;
  signed_url: string;
}

// Fetch data in a Server Component (this is how SSR is done in the app directory)
async function fetchImages(): Promise<ImageData[]> {
  const res = await fetch(
    "http://localhost:4000/api/images/batch?limit=7&page=1",
    {
      cache: "no-store", // Ensure fresh data on every request
    }
  );

  // Assuming the API always returns the correct format; you focus on the images
  const data = await res.json();
  return data?.data?.images || [];
}

// The main ImageGallery component with SSR
export default async function ImageGallery(): Promise<JSX.Element> {
  const images = await fetchImages();

  if (images.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {images.map((image) => (
        <div
          key={image.image_id}
          className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          {/* Use next/image for better performance with updated properties */}
          <div className="relative w-full h-48">
            <Image
              src={image.signed_url}
              alt={image.alt_text || "Image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-600">{image.alt_text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
